import { getHelp, getHelpByCommands } from "../api/help-api-service";
import { CommandDto, UsageDto } from "../../dto/command-dto";
import { noSeparation } from "../../utils/separation-utils";
import { showBetterParameter } from "../../utils/value-utils";

export async function help(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getHelp()).map(helpToString).reduce(noSeparation, "");
  }
  return helpToString(await getHelpByCommands(parameter));
}

function helpToString(command: CommandDto): string {
  return `${command.usages.flatMap((usage) => usageToString(command.command, usage)).reduce(noSeparation, "")}`;
}

function usageToString(command: string, usage: UsageDto): string {
  return `<div><span class="subject">${command}</span>${usage.parameter.length === 0 ? ":" : ""}
          ${usage.parameter.length === 0 ? "" : `<span class="parameter"> ${usage.parameter}</span>:`}
          ${showBetterParameter(usage.description)}</div>`;
}
