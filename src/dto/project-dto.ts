import { SkillDto } from "./skill-dto";

export interface ProjectDto {
  name: string;
  websites: string[];
  role: string;
  description: string;
  startYear: number;
  endYear: number;
  skills: SkillDto[];
}
