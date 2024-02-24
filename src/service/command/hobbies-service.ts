import { getHobbies } from "../api/hobbies-api-service";

export async function hobbies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getHobbies()).reduce(joinString);
  }
  // TODO: Error
  return "";
}

function joinString(string1: string, string2: string): string {
  return `${string1}, ${string2}`;
}
