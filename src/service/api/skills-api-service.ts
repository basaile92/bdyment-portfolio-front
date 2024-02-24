import { SkillDto } from "../../dto/skill-dto";
import { gql } from "graphql-request/build/cjs";
import { requestApi } from "./api-service";

export async function getSkills(): Promise<SkillDto[]> {
  const skillsQuery = gql`
    query skills {
      skills {
        name
        category
      }
    }
  `;
  return (await requestApi(skillsQuery))["skills"];
}

export async function getSkillsByCategory(
  category: string,
): Promise<SkillDto[]> {
  const skillsQuery = gql`
    query skillsByCategory($category: String!) {
      skillsByCategory(category: $category) {
        category
        name
      }
    }
  `;
  return (await requestApi(skillsQuery, category))["skillsByCategory"];
}
