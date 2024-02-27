import {
  getProjects,
  getProjectsBySkill,
  getProjectsByYear,
} from "../api/projects-api-service";
import { ProjectDto } from "../../dto/project-dto";
import { isInteger } from "../../utils/type-utils";
import { SkillDto } from "../../dto/skill-dto";
import {
  separateByComma,
  separateByNewLine,
} from "../../utils/separation-utils";
import { displayDatesAndPlace } from "../../utils/value-utils";

export async function projects(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getProjects())
      .map(projectToString)
      .reduce(separateByNewLine, "");
  }
  if (isInteger(parameter)) {
    return (await getProjectsByYear(Number.parseInt(parameter)))
      .map(projectToString)
      .reduce(separateByNewLine, "");
  }
  return (await getProjectsBySkill(parameter))
    .map(projectToString)
    .reduce(separateByNewLine, "");
}

function projectToString(project: ProjectDto): string {
  return `<div><div>
            <span class="title">${project.name}</span>
            <span class="subject">${project.role}</span>
          </div>
          <div>
          ${
            project.websites && project.websites.length > 0
              ? project.websites
                  .map(
                    (
                      website,
                    ) => `<a class="website" target="_blank" href="${website}">
            ${website}
          </a>`,
                  )
                  .reduce(separateByComma)
              : ""
          }
          </div>
          ${displayDatesAndPlace(project.startYear, project.endYear, project.isCurrent)}
          <br/><div> ${project.description} </div>
          <br/>
           ${project.skills.length > 0 ? `<div class="italic">${project.skills.map(skillToString).reduce(separateByComma)}</div>` : ""}
          </div>`;
}

function skillToString(skill: SkillDto): string {
  return `${skill.name}`;
}
