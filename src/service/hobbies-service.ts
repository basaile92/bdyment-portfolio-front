import { gql } from "graphql-request/build/cjs";
import { requestApi } from "./api-service";

export async function getHobbies(): Promise<string[]> {
  const hobbyQuery = gql`
    query Query {
      hobbies
    }
  `;
  return (await requestApi(hobbyQuery))["hobbies"];
}
