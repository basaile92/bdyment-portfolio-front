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
  return `<div>Available from <span class="important-value"> ${formatDate(availability.date)}</span></div><br/>`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
