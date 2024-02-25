import executionByCommandName from "./command-service";
import { commandError } from "./error-service";

export default function submitCommand(commandLine: string): Promise<string> {
  const arrayCommand = commandLine.split(" ");
  const command = arrayCommand[0];
  const parameter = arrayCommand.length > 1 ? arrayCommand[1] : "";
  const execution = executionByCommandName.get(command);
  if (!execution) {
    return commandError();
  }
  return execution(parameter);
}
