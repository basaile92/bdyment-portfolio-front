import { getHelp, getHelpByCommands } from "../api/help-api-service";
import { CommandDto, UsageDto } from "../../dto/command-dto";

export async function help(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getHelp()).map(helpToString).reduce(joinString);
  }
  return helpToString(await getHelpByCommands(parameter));
}

function helpToString(command: CommandDto): string {
  return `${command.command}:
         ${command.usages.map(usageToString).reduce(joinUsageString)}`;
}

function usageToString(usage: UsageDto): string {
  return `-${usage.parameter}: ${usage.description}`;
}

function joinUsageString(string1: string, string2: string): string {
  return `${string1}
          ${string2}`;
}

function joinString(string1: string, string2: string): string {
  return `${string1}

            ${string2}`;
}
