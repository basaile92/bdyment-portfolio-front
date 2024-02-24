import { StudyDto } from "../../dto/study-dto";
import { gql } from "graphql-request/build/cjs";
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
        isCurrent
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
        isCurrent
      }
    }
  `;
  return (await requestApi(studiesQuery, year))["studies"];
}
