import { getCompanies, getCompaniesByYear } from "../api/companies-api-service";
import { CompanyDto } from "../../dto/company-dto";
import { isInteger } from "../../utils/type-utils";
import { separateByNewLine } from "../../utils/separation-utils";
import {
  displayDatesAndPlace,
  displayValueIfPresent,
} from "../../utils/value-utils";
import { parameterError } from "../error-service";

export async function companies(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getCompanies())
      .map(companyToString)
      .reduce(separateByNewLine, "");
  }
  if (isInteger(parameter)) {
    return (await getCompaniesByYear(Number.parseInt(parameter)))
      .map(companyToString)
      .reduce(separateByNewLine, "");
  }
  return await parameterError("companies");
}

function companyToString(company: CompanyDto): string {
  return `<div><div>
            <span class="title">${company.name}</span>
            <span class="subject">${company.role}</span>
          </div>
          ${displayValueIfPresent(
            company.website,
            `<a class="link" target="_blank" href="${company.website}">
            ${company.website}
          </a>`,
          )}
          ${displayDatesAndPlace(company.startYear, company.endYear, company.place)}
          ${company.description ? `<br/><div>${company.description}</div>` : ""}</div>`;
}
