export interface DescriptionDto {
  photoInHTML: string;
  name: string;
  age: AgeDto;
  job: string;
  linkedin: string;
  github: string;
  presentation: string;
}

export interface AgeDto {
  timeInHour: number;
  timeInDay: number;
  timeInYear: number;
}
