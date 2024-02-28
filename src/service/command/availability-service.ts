import { parameterError } from "../error-service";
import { getAvailability } from "../api/availability-api-service";
import { AvailabilityDto } from "../../dto/availability-dto";

export async function availability(parameter: string): Promise<string> {
  if (!parameter) {
    return availabilityToString(await getAvailability());
  }
  return await parameterError("description");
}

function availabilityToString(availability: AvailabilityDto): string {
  return `<div><span class="label">Date:</span><span class="important-value"> ${formatDate(availability.date)}</span></div><br/>`;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
