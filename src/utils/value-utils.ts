export function displayValueIfPresent(
  value: string | null,
  toDisplay: string,
): string {
  return value !== null ? toDisplay : "";
}

export function displayDatesAndPlace(
  startYear: number,
  endYear: number,
  isCurrent: boolean,
  place?: string,
) {
  return `<div class="italic">
            ${startYear}${startYear === endYear ? "" : `${!isCurrent ? `-${endYear}` : "~"}`}
            ${place ? "-" : ""}
            ${place ? place : ""}
          </div>`;
}

export function showBetterParameter(parameter: string): string {
  return parameter
    .replace("{", "<span class='parameter'>{")
    .replace("}", "}</span>");
}

export function keepNewLine(value: string): string {
  return value.replace("\n", "<br/>");
}
