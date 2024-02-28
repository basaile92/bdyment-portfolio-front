import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { AvailabilityDto } from "../../dto/availability-dto";

export async function getAvailability(): Promise<AvailabilityDto> {
  const availabilityQuery = gql`
    query availability {
      availability {
        date
      }
    }
  `;
  return (await requestApi(availabilityQuery))["availability"];
}
