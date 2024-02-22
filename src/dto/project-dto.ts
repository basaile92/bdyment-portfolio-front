import { SkillDto } from "./skill-dto";

export interface ProjectDto {
  name: string;
  website: string;
  role: string;
  description: string;
  startYear: number;
  endYear: number;
  skills: [SkillDto];
  isCurrent: boolean;
}
