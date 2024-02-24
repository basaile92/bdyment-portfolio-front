import {
  getProjects,
  getProjectsBySkill,
  getProjectsByYear,
} from "../api/projects-api-service";
import { ProjectDto } from "../../dto/project-dto";
import { isInteger } from "../../utils/type-utils";
import { SkillDto } from "../../dto/skill-dto";

export async function projects(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getProjects()).map(projectToString).reduce(projectJoinString);
  }
  if (isInteger(parameter)) {
    return (await getProjectsByYear(Number.parseInt(parameter)))
      .map(projectToString)
      .reduce(projectJoinString);
  }
  return (await getProjectsBySkill(parameter))
    .map(projectToString)
    .reduce(projectJoinString);
}

function projectToString(project: ProjectDto): string {
  return `${project.name}---${project.role}\n
            ${project.website}
            ${project.startYear}${!project.isCurrent ? `-${project.endYear}` : "~"}\n
            ${project.description}\n
            ${project.skills.map(skillToString).reduce(skillJoinString)}`;
}

function skillToString(skill: SkillDto): string {
  return `${skill.name}`;
}

function skillJoinString(string1: string, string2: string): string {
  return `${string1}, ${string2}`;
}

function projectJoinString(string1: string, string2: string): string {
  return `${string1}

            ${string2}`;
}
