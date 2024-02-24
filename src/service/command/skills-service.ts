import { getSkills, getSkillsByCategory } from "../api/skills-api-service";
import { SkillDto } from "../../dto/skill-dto";

export async function skills(parameter: string): Promise<string> {
  if (!parameter) {
    return Array.from(groupByCategory(await getSkills()))
      .map(skillsByCategoryToString)
      .reduce(skillsByCategoriesJoinString);
  }
  return (await getSkillsByCategory(parameter))
    .map((skill) => skill.name)
    .reduce(skillJoinString);
}

function groupByCategory(array: SkillDto[]): Map<string, string[]> {
  const result = new Map<string, string[]>();
  array.forEach((element) => {
    const listOfNamesForCategory = result.get(element.category) || [];
    listOfNamesForCategory.push(element.name);
    result.set(element.category, listOfNamesForCategory);
  });
  return result;
}

function skillsByCategoryToString(skillsByCategory: [string, string[]]) {
  return `${skillsByCategory[0]}: ${skillsByCategory[1].reduce(skillJoinString)}`;
}

function skillsByCategoriesJoinString(
  string1: string,
  string2: string,
): string {
  return `${string1}
          ${string2}`;
}

function skillJoinString(string1: string, string2: string): string {
  return `${string1}, ${string2}`;
}
