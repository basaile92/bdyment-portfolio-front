import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { MissionDto } from "../../dto/mission-dto";

export async function getMissions(): Promise<MissionDto[]> {
  const missionsQuery = gql`
    query missions {
      missions {
        company
        websites
        role
        place
        description
        startYear
        endYear
        skills {
          name
          category
        }
      }
    }
  `;
  return (await requestApi(missionsQuery))["missions"];
}

export async function getMissionsBySkill(
  skillName: string,
): Promise<MissionDto[]> {
  const missionsQuery = gql`
    query missionsBySkill($skillName: String!) {
      missionsBySkill(skillName: $skillName) {
        company
        websites
        role
        place
        description
        startYear
        endYear
        skills {
          name
          category
        }
      }
    }
  `;
  const variables = { skillName: skillName };
  return (await requestApi(missionsQuery, variables))["missionsBySkill"];
}

export async function getMissionsByYear(year: number): Promise<MissionDto[]> {
  const missionsQuery = gql`
    query missionsByYear($year: Int!) {
      missionsByYear(year: $year) {
        company
        websites
        role
        place
        description
        startYear
        endYear
        skills {
          name
          category
        }
      }
    }
  `;
  const variables = { year: year };
  return (await requestApi(missionsQuery, variables))["missionsByYear"];
}
