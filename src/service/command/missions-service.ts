import {
  getMissions,
  getMissionsBySkill,
  getMissionsByYear,
} from "../api/missions-api-service";
import { MissionDto } from "../../dto/mission-dto";
import { isInteger } from "../../utils/type-utils";
import { SkillDto } from "../../dto/skill-dto";

export async function missions(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getMissions()).map(missionToString).reduce(missionJoinString);
  }
  if (isInteger(parameter)) {
    return (await getMissionsByYear(Number.parseInt(parameter)))
      .map(missionToString)
      .reduce(missionJoinString);
  }
  return (await getMissionsBySkill(parameter))
    .map(missionToString)
    .reduce(missionJoinString);
}

function missionToString(mission: MissionDto): string {
  return `${mission.company}${mission.place}---${mission.role}\n
            ${mission.website}
            ${mission.startYear}${!mission.isCurrent ? `-${mission.endYear}` : "~"}\n
            ${mission.description}\n
            ${mission.skills.map(skillToString).reduce(skillJoinString)}`;
}

function skillToString(skill: SkillDto): string {
  return `${skill.name}`;
}

function skillJoinString(string1: string, string2: string): string {
  return `${string1}, ${string2}`;
}

function missionJoinString(string1: string, string2: string): string {
  return `${string1}

            ${string2}`;
}
