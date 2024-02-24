import { getCompanies, getCompaniesByYear } from "../api/companies-api-service";
import { CompanyDto } from "../../dto/company-dto";
import { isInteger } from "../../utils/type-utils";

export async function companies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getCompanies()).map(companyToString).reduce(joinString);
  }
  if (isInteger(parameter)) {
    return (await getCompaniesByYear(Number.parseInt(parameter)))
      .map(companyToString)
      .reduce(joinString);
  }
  // TODO: Error
  return "";
}

function companyToString(company: CompanyDto): string {
  return `${company.name}${company.place ? `;${company.place}` : ""}---${company.role}\n
            ${company.website}
            ${company.startYear}${!company.isCurrent ? `-${company.endYear}` : "~"}\n
            ${company.description ? company.description : ""}`;
}

function joinString(string1: string, string2: string): string {
  return `${string1}

            ${string2}`;
}
