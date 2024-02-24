import { companies } from "./command/companies-service";
import { description } from "./command/description-service";
import { hobbies } from "./command/hobbies-service";
import { help } from "./command/help-service";
import { languages } from "./command/languages-service";
import { missions } from "./command/missions-service";
import { projects } from "./command/projects-service";
import { skills } from "./command/skills-service";
import { studies } from "./command/studies-service";

let executionByCommandName: Map<string, (param: string) => Promise<string>> =
  new Map();
executionByCommandName.set("companies", companies);
executionByCommandName.set("description", description);
executionByCommandName.set("hobbies", hobbies);
executionByCommandName.set("help", help);
executionByCommandName.set("languages", languages);
executionByCommandName.set("missions", missions);
executionByCommandName.set("projects", projects);
executionByCommandName.set("skills", skills);
executionByCommandName.set("studies", studies);

export default executionByCommandName;
