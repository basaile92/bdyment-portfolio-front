import { gql } from "graphql-request/build/cjs";
import { requestApi } from "./api-service";
import { ProjectDto } from "../dto/project-dto";

export async function getProjects(): Promise<ProjectDto[]> {
  const projectsQuery = gql`
    query projects {
      projects {
        name
        website
        role
        description
        startYear
        endYear
        skills {
          name
          category
        }
        isCurrent
      }
    }
  `;
  return (await requestApi(projectsQuery))["projects"];
}

export async function getProjectsBySkill(
  skillName: string,
): Promise<ProjectDto[]> {
  const projectsQuery = gql`
    query projectsBySkill($skillName: String!) {
      projectsBySkill(skillName: $skillName) {
        name
        website
        role
        description
        startYear
        endYear
        skills {
          name
          category
        }
        isCurrent
      }
    }
  `;
  return (await requestApi(projectsQuery, skillName))["projectsBySkill"];
}

export async function getProjectsByYear(year: number): Promise<ProjectDto[]> {
  const projectsQuery = gql`
    query projectsByYear($year: Int!) {
      projectsByYear(year: $year) {
        name
        website
        role
        description
        startYear
        endYear
        skills {
          name
          category
        }
        isCurrent
      }
    }
  `;
  return (await requestApi(projectsQuery, year))["projectsByYear"];
}
