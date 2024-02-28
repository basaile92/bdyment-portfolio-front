import { companies } from "./command/companies-service";
import { description } from "./command/description-service";
import { hobbies } from "./command/hobbies-service";
import { help } from "./command/help-service";
import { languages } from "./command/languages-service";
import { missions } from "./command/missions-service";
import { projects } from "./command/projects-service";
import { skills } from "./command/skills-service";
import { studies } from "./command/studies-service";
import { availability } from "./command/availability-service";
import { certificates } from "./command/certificates-service";
export const AVAILABILITY_COMMAND = "availability";
export const CERTIFICATES_COMMAND = "certificates";

export const COMPAGNIES_COMMAND = "companies";
export const CLEAR_COMMAND = "clear";
export const DESCRIPTION_COMMAND = "description";
export const HELP_COMMAND = "help";
export const HOBBIES_COMMAND = "hobbies";
export const LANGUAGES_COMMAND = "languages";
export const MISSIONS_COMMAND = "missions";
export const PROJECTS_COMMAND = "projects";
export const SKILLS_COMMAND = "skills";
export const STUDIES_COMMAND = "studies";

export const AVAILABLE_COMMANDS = [
  AVAILABILITY_COMMAND,
  CERTIFICATES_COMMAND,
  COMPAGNIES_COMMAND,
  CLEAR_COMMAND,
  DESCRIPTION_COMMAND,
  HELP_COMMAND,
  HOBBIES_COMMAND,
  LANGUAGES_COMMAND,
  MISSIONS_COMMAND,
  PROJECTS_COMMAND,
  SKILLS_COMMAND,
  STUDIES_COMMAND,
];

const executionByCommandName: Map<string, (param: string) => Promise<string>> =
  new Map();
executionByCommandName.set(AVAILABILITY_COMMAND, availability);
executionByCommandName.set(CERTIFICATES_COMMAND, certificates);
executionByCommandName.set(COMPAGNIES_COMMAND, companies);
executionByCommandName.set(DESCRIPTION_COMMAND, description);
executionByCommandName.set(HOBBIES_COMMAND, hobbies);
executionByCommandName.set(HELP_COMMAND, help);
executionByCommandName.set(LANGUAGES_COMMAND, languages);
executionByCommandName.set(MISSIONS_COMMAND, missions);
executionByCommandName.set(PROJECTS_COMMAND, projects);
executionByCommandName.set(SKILLS_COMMAND, skills);
executionByCommandName.set(STUDIES_COMMAND, studies);

export default executionByCommandName;
