import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { CompanyDto } from "../../dto/company-dto";

export async function getCompanies(): Promise<CompanyDto[]> {
  const companyQuery = gql`
    query companies {
      companies {
        name
        website
        role
        place
        startYear
        endYear
        description
        isCurrent
      }
    }
  `;
  return (await requestApi(companyQuery))["companies"];
}

export async function getCompaniesByYear(year: number): Promise<CompanyDto[]> {
  const companyQuery = gql`
    query companies($year: Int!) {
      companiesByYear(year: $year) {
        name
        website
        role
        place
        startYear
        endYear
        description
        isCurrent
      }
    }
  `;
  return (await requestApi(companyQuery, year))["companies"];
}
