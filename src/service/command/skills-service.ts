import { getSkills, getSkillsByCategory } from "../api/skills-api-service";
import { SkillDto } from "../../dto/skill-dto";
import {
  separateByComma,
  separateByNewLine,
} from "../../utils/separation-utils";

export async function skills(parameter: string): Promise<string> {
  if (!parameter) {
    return Array.from(groupByCategory(await getSkills()))
      .map(skillsByCategoryToString)
      .reduce(separateByNewLine);
  }
  return (await getSkillsByCategory(parameter))
    .map((skill) => skill.name)
    .reduce(separateByComma);
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
  return `<div><div class="subject">${skillsByCategory[0]}:</div>
               <div>${skillsByCategory[1].map(skillToString).reduce(separateByComma)}</div></div>`;
}

function skillToString(skill: string): string {
  return `<span class="parameter">${skill}</span>`;
}
