import { companies } from "./companies-service";
import { description } from "./description-service";

let executionByCommandName: Map<string, (param: string) => Promise<string>> =
  new Map();
executionByCommandName.set("companies", companies);
executionByCommandName.set("description", description);

export default executionByCommandName;
