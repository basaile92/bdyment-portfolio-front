import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { CommandDto } from "../../dto/command-dto";

export async function getHelp(): Promise<CommandDto[]> {
  const helpQuery = gql`
    query help {
      help {
        command
        usages {
          parameter
          description
        }
      }
    }
  `;
  return (await requestApi(helpQuery))["help"];
}

export async function getHelpByCommands(
  commandLabel: string,
): Promise<CommandDto> {
  const helpQuery = gql`
    query helpByCommand($commandLabel: String!) {
      helpByCommand(commandLabel: $commandLabel) {
        command
        usages {
          parameter
          description
        }
      }
    }
  `;
  const variables = { commandLabel: commandLabel };
  return (await requestApi(helpQuery, variables))["helpByCommand"];
}
