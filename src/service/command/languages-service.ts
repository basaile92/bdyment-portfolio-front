import { getLanguages } from "../api/languages-api-service";
import { LanguageDto } from "../../dto/language-dto";

export async function languages(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getLanguages()).map(languageToString).reduce(joinString);
  }
  // TODO: Error
  return "";
}
function languageToString(language: LanguageDto): string {
  return `-${language.name}: ${language.level}`;
}

function joinString(string1: string, string2: string): string {
  return `${string1}
            ${string2}`;
}
