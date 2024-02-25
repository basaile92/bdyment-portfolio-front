import { getDescription } from "../api/description-api-service";
import { AgeDto, DescriptionDto } from "../../dto/description-dto";
import { parameterError } from "../error-service";

export async function description(parameter: string): Promise<string> {
  if (!parameter) {
    return descriptionToString(await getDescription());
  }
  return await parameterError("description");
}

function descriptionToString(description: DescriptionDto): string {
  return `<div><span class="label">Name:</span><span class="important-value"> ${description.name}</span></div><br/>
          <div><span class="label">Age:</span> ${ageToString(description.age)}</div><br/>
          <div><span class="label">Job:</span><span class="important-value"> ${description.job}</span></div>  `;
}

function ageToString(age: AgeDto): string {
  return `<span class="important-value">${age.timeInYear}</span> years or <span class="important-value">${age.timeInDay}</span> days or <span class="important-value">${age.timeInHour}</span> hours`;
}
