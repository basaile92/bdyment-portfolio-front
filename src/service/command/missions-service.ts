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
import { displayDatesAndPlace, keepNewLine } from "../../utils/value-utils";

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
          <div>
          ${
            mission.websites && mission.websites.length > 0
              ? mission.websites
                  .map(
                    (
                      website,
                    ) => `<a class="link" target="_blank" href="${website}">
            ${website}
          </a>`,
                  )
                  .reduce(separateByNewLine)
              : ""
          }
          </div>
          ${displayDatesAndPlace(mission.startYear, mission.endYear, mission.isCurrent, mission.place)}
          <br/><div> ${keepNewLine(mission.description)} </div>
          <br/>
           ${mission.skills.length > 0 ? `<div class="italic">${mission.skills.map(skillToString).reduce(separateByComma)}</div>` : ""}
          </div>`;
}

function skillToString(skill: SkillDto): string {
  return `${skill.name}`;
}
