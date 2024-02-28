import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { DescriptionDto } from "../../dto/description-dto";

export async function getDescription(): Promise<DescriptionDto> {
  const descriptionQuery = gql`
    query description {
      description {
        photoInHTML
        name
        age {
          timeInHour
          timeInDay
          timeInYear
        }
        job
        linkedin
        github
        presentation
      }
    }
  `;
  return (await requestApi(descriptionQuery))["description"];
}
