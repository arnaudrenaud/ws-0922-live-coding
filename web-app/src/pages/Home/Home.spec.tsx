import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import Home, { GET_WILDERS } from "./Home";
import { BrowserRouter } from "react-router-dom";
import { GetWildersQuery } from "../../gql/graphql";

const renderHome = (mocks: MockedResponse<GetWildersQuery>[] = []) => {
  render(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>,
    { wrapper: BrowserRouter }
  );
};

describe("Home", () => {
  describe("before wilders have been fetched", () => {
    it("renders a loading indicator", () => {
      renderHome();

      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  describe("after wilder list has been fetched", () => {
    describe("when wilder list empty", () => {
      const mockGetWildersEmpty: MockedResponse<GetWildersQuery> = {
        request: {
          query: GET_WILDERS,
          variables: { pageNumber: 1 },
        },
        result: {
          data: {
            wilders: {
              totalCount: 100,
              nextPageNumber: null,
              wilders: [],
            },
          },
        },
      };

      it("renders specific message", async () => {
        renderHome([mockGetWildersEmpty]);

        await waitFor(() => {
          expect(
            screen.getByText("Aucun wilder à afficher.")
          ).toBeInTheDocument();
        });
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
      });
    });

    describe("when wilder list not empty", () => {
      const mockGetWildersNotEmpty: MockedResponse<GetWildersQuery> = {
        request: {
          query: GET_WILDERS,
          variables: { pageNumber: 1 },
        },
        result: {
          data: {
            wilders: {
              totalCount: 100,
              nextPageNumber: null,
              wilders: [
                {
                  id: "1234",
                  firstName: "Jean",
                  lastName: "Wilder",
                  skills: [{ id: "js", skillName: "JavaScript" }],
                },
                {
                  id: "5678",
                  firstName: "Jeanne",
                  lastName: "Wilder",
                  skills: [{ id: "ts", skillName: "TypeScript" }],
                },
              ],
            },
          },
        },
      };

      it("renders wilder list", async () => {
        renderHome([mockGetWildersNotEmpty]);

        await waitFor(() => {
          expect(screen.getByTestId("wilder-list")).toBeInTheDocument();
        });
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
        expect(screen.getAllByTestId("wilder-list-element")).toHaveLength(2);
      });
    });
  });
});
