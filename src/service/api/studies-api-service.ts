import { StudyDto } from "../../dto/study-dto";
import { gql } from "graphql-request";
import { requestApi } from "./api-service";

export async function getStudies(): Promise<StudyDto[]> {
  const studiesQuery = gql`
    query studies {
      studies {
        label
        place
        school
        startYear
        endYear
        diploma
        degree
      }
    }
  `;
  return (await requestApi(studiesQuery))["studies"];
}

export async function getStudiesByYear(year: number): Promise<StudyDto[]> {
  const studiesQuery = gql`
    query studiesByYear($year: Int!) {
      studiesByYear(year: $year) {
        label
        place
        school
        startYear
        endYear
        diploma
        degree
      }
    }
  `;
  const variables = { year: year };
  return (await requestApi(studiesQuery, variables))["studiesByYear"];
}
