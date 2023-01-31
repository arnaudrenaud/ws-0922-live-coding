import { gql, useQuery } from "@apollo/client";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import WilderCard from "../components/WilderCard/WilderCard";
import { GetWildersQuery } from "../gql/graphql";
import { usePushAction, usePushNotifications } from "../push-notifications";
import { RootTabScreenProps } from "../types";

export const GET_WILDERS = gql`
  query GetWilders {
    wilders {
      id
      firstName
      lastName
      isApproved
    }
  }
`;

export default function Wilders({ navigation }: RootTabScreenProps<"Wilders">) {
  const { loading, data, error, refetch } =
    useQuery<GetWildersQuery>(GET_WILDERS);

  usePushAction("GetWilders", refetch);

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Wilders
      </Text>
      <ScrollView style={styles.wilderList}>
        {data?.wilders.map((wilder) => (
          <View key={wilder.id}>
            <WilderCard {...wilder} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  wilderList: {
    padding: 12,
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
