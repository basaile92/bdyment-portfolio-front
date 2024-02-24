import { getStudies, getStudiesByYear } from "../api/studies-api-service";
import { StudyDto } from "../../dto/study-dto";
import { isInteger } from "../../utils/type-utils";

export async function studies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getStudies()).map(studyToString).reduce(joinString);
  }
  if (isInteger(parameter)) {
    return (await getStudiesByYear(Number.parseInt(parameter)))
      .map(studyToString)
      .reduce(joinString);
  }
  // TODO: Error
  return "";
}

function studyToString(study: StudyDto): string {
  return `${study.label};${study.place}\n
            ${study.school}
            ${study.startYear}${!study.isCurrent ? `-${study.endYear}` : "~"}\n
            ${study.diploma}${study.degree}`;
}

function joinString(string1: string, string2: string): string {
  return `${string1}

            ${string2}`;
}
