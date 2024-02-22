import { SkillDto } from "./skill-dto";

export interface MissionDto {
  company: string;
  website: string;
  role: string;
  place: string;
  description: string;
  startYear: number;
  endYear: number;
  skills: [SkillDto];
  isCurrent: boolean;
}
