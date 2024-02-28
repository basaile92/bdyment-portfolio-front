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
  return `<div dangerouslySetInnerHTML={{ __html: description.photoInHTML }}/><br/>
          <div><span className="label">Name:</span><span className="important-value"> ${description.name}</span></div><br/>
          <div><span className="label">Age:</span> ${ageToString(description.age)}</div><br/>
          <div><span className="label">Job:</span><span className="important-value"> ${description.job}</span></div><br>
          <div><span className="label">Linked-in:</span><span className="website"> ${description.linkedin}</span></div><br>
          <div><span className="label">GitHub:</span><span className="website"> ${description.github}</span></div><br>
          <div><span className="label">Presentation:</span><span className="important-value"> ${description.presentation}</span></div>  `;
}

function ageToString(age: AgeDto): string {
  return `<span class="important-value">${age.timeInYear}</span> years or <span class="important-value">${age.timeInDay}</span> days or <span class="important-value">${age.timeInHour}</span> hours`;
}
