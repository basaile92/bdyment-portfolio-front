import { getDescription } from "../api/description-api-service";
import { AgeDto, DescriptionDto } from "../../dto/description-dto";

export async function description(parameter: string): Promise<string> {
  if (!parameter) {
    return descriptionToString(await getDescription());
  }
  // TODO: Error
  return "";
}

function descriptionToString(description: DescriptionDto): string {
  return `${description.name} ${ageToString(description.age)} ${description.job}`;
}

function ageToString(age: AgeDto): string {
  return `Age: in Years:${age.timeInYear} in Days:${age.timeInDay} In hours:${age.timeInHour}`;
}
