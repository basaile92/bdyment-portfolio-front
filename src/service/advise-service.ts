import { AVAILABLE_COMMANDS } from "./command-service";

export function adviseACommandWhoStartWith(value: string, index: number) {
  const filteredCommand = adviseCommandsWhoStartWith(value);
  if (filteredCommand.length === 0) {
    return "";
  }
  return filteredCommand[index % filteredCommand.length];
}

export function adviseCommandsWhoStartWith(value: string) {
  if (value.length === 0) return AVAILABLE_COMMANDS;
  return AVAILABLE_COMMANDS.filter((command) => command.startsWith(value));
}