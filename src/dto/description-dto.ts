export interface DescriptionDto {
  name: string;
  age: Age;
  job: string;
}

interface Age {
  timeInHour: number;
  timeInDay: number;
  timeInYear: number;
}
