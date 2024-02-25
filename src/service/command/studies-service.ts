import { getStudies, getStudiesByYear } from "../api/studies-api-service";
import { StudyDto } from "../../dto/study-dto";
import { isInteger } from "../../utils/type-utils";
import { separateByNewLine } from "../../utils/separation-utils";
import { displayDatesAndPlace } from "../../utils/value-utils";
import { parameterError } from "../error-service";

export async function studies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getStudies()).map(studyToString).reduce(separateByNewLine);
  }
  if (isInteger(parameter)) {
    return (await getStudiesByYear(Number.parseInt(parameter)))
      .map(studyToString)
      .reduce(separateByNewLine);
  }
  return parameterError("studies");
}

function studyToString(study: StudyDto): string {
  return `<div><div>
            <span class="title">${study.label}</span>
          </div>
          ${displayDatesAndPlace(study.startYear, study.endYear, study.isCurrent, study.place)}
          <div class="second-italic">${study.school}</div>
          <div>${study.diploma} (${study.degree})</div>
          </div>`;
}
