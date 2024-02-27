import { getHobbies } from "../api/hobbies-api-service";
import { separateByComma } from "../../utils/separation-utils";
import { parameterError } from "../error-service";

export async function hobbies(parameter: string): Promise<string> {
  if (!parameter) {
    const hobbies = await getHobbies();
    if (hobbies.length === 0) {
      return "";
    }
    return hobbies.map(hobbiesToString).reduce(separateByComma);
  }
  return parameterError("hobbies");
}

function hobbiesToString(hobbies: string): string {
  return `<span class="important-value">${hobbies}</span>`;
}
