import { help } from "./command/help-service";

export function parameterError(
  parameter:
    | "companies"
    | "description"
    | "help"
    | "hobbies"
    | "languages"
    | "missions"
    | "projects"
    | "skills"
    | "studies",
): Promise<string> {
  return help(parameter).then((result) => {
    return new Promise((resolve) =>
      resolve(
        `<div class="error">Wrong parameter</div><div class="label">Available usages:</div>${result}`,
      ),
    );
  });
}

export function commandError(): Promise<string> {
  return help("").then((result) => {
    return new Promise((resolve) =>
      resolve(
        `<div class="error">Wrong command</div><div class="label">Available commands:</div>${result}`,
      ),
    );
  });
}

export function serverError(): string {
  return "<div class='error'>The command line is not available because server is down.</div>";
}
