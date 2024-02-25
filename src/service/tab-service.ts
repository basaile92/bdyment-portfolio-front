const AVAILABLE_COMMANDS = [
  "companies",
  "clear",
  "description",
  "help",
  "hobbies",
  "languages",
  "missions",
  "projects",
  "skills",
  "studies",
];

export function adviseACommandWhoStartWith(value: string, index: number) {
  const filteredCommand = adviseCommandsWhoStartWith(value);
  if (filteredCommand.length === 0) {
    return "";
  }
  console.log(index, filteredCommand.length);
  console.log(index % filteredCommand.length);
  return filteredCommand[index % filteredCommand.length];
}

export function adviseCommandsWhoStartWith(value: string) {
  if (value.length === 0) return AVAILABLE_COMMANDS;
  return AVAILABLE_COMMANDS.filter((command) => command.startsWith(value));
}
