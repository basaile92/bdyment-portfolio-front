import {
  getMissions,
  getMissionsBySkill,
  getMissionsByYear,
} from "../api/missions-api-service";
import { MissionDto } from "../../dto/mission-dto";
import { isInteger } from "../../utils/type-utils";
import { SkillDto } from "../../dto/skill-dto";
import {
  separateByComma,
  separateByNewLine,
} from "../../utils/separation-utils";
import {
  displayDatesAndPlace,
  displayValueIfPresent,
} from "../../utils/value-utils";

export async function missions(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getMissions())
      .map(missionToString)
      .reduce(separateByNewLine, "");
  }
  if (isInteger(parameter)) {
    return (await getMissionsByYear(Number.parseInt(parameter)))
      .map(missionToString)
      .reduce(separateByNewLine, "");
  }
  return (await getMissionsBySkill(parameter))
    .map(missionToString)
    .reduce(separateByNewLine, "");
}

function missionToString(mission: MissionDto): string {
  return `<div><div>
            <span class="title">${mission.company}</span>
            <span class="subject">${mission.role}</span>
          </div>
          ${displayValueIfPresent(
            mission.website,
            `<a class="website" target="_blank" href="${mission.website}">
            ${mission.website}
          </a>`,
          )}
          ${displayDatesAndPlace(mission.startYear, mission.endYear, mission.isCurrent, mission.place)}
          <br/><div> ${mission.description} </div>
          <br/>
           <div class="italic">${mission.skills.map(skillToString).reduce(separateByComma, "")}</div>
          </div>`;
}

function skillToString(skill: SkillDto): string {
  return `${skill.name}`;
}
