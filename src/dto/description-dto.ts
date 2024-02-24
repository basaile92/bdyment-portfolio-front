export interface DescriptionDto {
  name: string;
  age: AgeDto;
  job: string;
}

export interface AgeDto {
  timeInHour: number;
  timeInDay: number;
  timeInYear: number;
}
