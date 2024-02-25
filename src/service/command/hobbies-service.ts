import { getHobbies } from "../api/hobbies-api-service";
import { separateByComma } from "../../utils/separation-utils";
import { help } from "./help-service";
import { parameterError } from "../error-service";

export async function hobbies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getHobbies()).map(hobbiesToString).reduce(separateByComma);
  }
  return parameterError("hobbies");
}

function hobbiesToString(hobbies: string): string {
  return `<span class="important-value">${hobbies}</span>`;
}
