import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardRow, CardRowElement } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader";
import { SectionTitle } from "../../styles/base-styles";
import { CREATE_WILDER_PATH } from "../paths";
import { useQuery, gql } from "@apollo/client";
import { GetWildersQuery, GetWildersQueryVariables } from "../../gql/graphql";

export const GET_WILDERS = gql`
  query GetWilders($pageNumber: Int!) {
    wilders(pageNumber: $pageNumber) {
      nextPageNumber
      totalCount
      wilders {
        id
        firstName
        lastName
        skills {
          id
          skillName
        }
      }
    }
  }
`;

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, refetch } = useQuery<
    GetWildersQuery,
    GetWildersQueryVariables
  >(GET_WILDERS, {
    variables: { pageNumber },
    fetchPolicy: "cache-and-network",
  });

  const nextPageNumber = data?.wilders.nextPageNumber;
  useEffect(() => {
    const incrementPageNumberIfBottomReached = () => {
      const documentBottomReached =
        window.scrollY + window.innerHeight + 100 >= document.body.clientHeight;

      // console.log({
      //   scroll: window.scrollY,
      //   windowHeight: window.innerHeight,
      //   documentHeight: document.body.clientHeight,
      //   documentBottomReached,
      // });

      if (documentBottomReached && !loading && nextPageNumber) {
        console.log(`reached bottom of page ${pageNumber}`);
        setPageNumber(pageNumber + 1);
      }
    };

    window.addEventListener("scroll", incrementPageNumberIfBottomReached);

    return () => {
      window.removeEventListener("scroll", incrementPageNumberIfBottomReached);
    };
  }, [pageNumber, loading, nextPageNumber]);

  const wilders = data?.wilders?.wilders;
  const renderMainContent = () => {
    if (!data && loading) {
      return <Loader role="status" />;
    }
    if (error) {
      return error.message;
    }
    if (!wilders?.length) {
      return "Aucun wilder à afficher.";
    }
    return (
      <>
        <CardRow data-testid="wilder-list">
          {wilders.map((wilder) => (
            <CardRowElement key={wilder.id} data-testid="wilder-list-element">
              <Wilder
                id={wilder.id}
                firstName={wilder.firstName}
                lastName={wilder.lastName}
                skills={wilder.skills}
                onDelete={refetch}
              />
            </CardRowElement>
          ))}
        </CardRow>
        {loading && <Loader role="status" />}
      </>
    );
  };

  return (
    <>
      <SectionTitle>
        Wilders {wilders?.length ? `(${data?.wilders.totalCount})` : ""}
      </SectionTitle>
      <Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
      <br />
      <br />
      {renderMainContent()}
    </>
  );
};

export default Home;
