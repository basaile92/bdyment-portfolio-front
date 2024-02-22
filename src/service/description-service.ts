import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { CompanyDto } from "../dto/company-dto";
import { DescriptionDto } from "../dto/description-dto";

export async function getDescription(): Promise<DescriptionDto> {
  const descriptionQuery = gql`
    query description {
      description {
        name
        age {
          timeInHour
          timeInDay
          timeInYear
        }
        job
      }
    }
  `;
  return (await requestApi(descriptionQuery))["description"];
}
