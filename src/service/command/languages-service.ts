import { getLanguages } from "../api/languages-api-service";
import { LanguageDto } from "../../dto/language-dto";
import { separateByNewLine } from "../../utils/separation-utils";

export async function languages(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getLanguages())
      .map(languageToString)
      .reduce(separateByNewLine);
  }
  // TODO: Error
  return "";
}
function languageToString(language: LanguageDto): string {
  return `<div><span class="subject">${language.name}:</span> <span class="subject ${language.level.toLowerCase()}">${language.level}</span></div>`;
}
