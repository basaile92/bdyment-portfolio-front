import { gql } from "graphql-request/build/cjs";
import { requestApi } from "./api-service";
import { LanguageDto } from "../../dto/language-dto";

export async function getLanguages(): Promise<LanguageDto[]> {
  const languagesQuery = gql`
    query languages {
      languages {
        name
        level
      }
    }
  `;
  return (await requestApi(languagesQuery))["languages"];
}
