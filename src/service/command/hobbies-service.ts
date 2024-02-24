import { getHobbies } from "../api/hobbies-api-service";
import { separateByComma } from "../../utils/separation-utils";

export async function hobbies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getHobbies()).map(hobbiesToString).reduce(separateByComma);
  }
  // TODO: Error
  return "";
}

function hobbiesToString(hobbies: string): string {
  return `<span class="important-value">${hobbies}</span>`;
}
