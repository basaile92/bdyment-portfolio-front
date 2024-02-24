import { requestApi } from "./api-service";
import { gql } from "graphql-request";

export async function getHobbies(): Promise<string[]> {
  const hobbyQuery = gql`
    query hobbies {
      hobbies
    }
  `;
  return (await requestApi(hobbyQuery))["hobbies"];
}
