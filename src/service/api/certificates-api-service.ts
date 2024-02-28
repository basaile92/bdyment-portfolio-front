import { gql } from "graphql-request";
import { requestApi } from "./api-service";
import { CertificateDto } from "../../dto/certificate-dto";

export async function getCertificates(): Promise<CertificateDto[]> {
  const certificatesQuery = gql`
    query certificates {
      certificates {
        certifier
        skill
        year
        link
      }
    }
  `;
  return (await requestApi(certificatesQuery))["certificates"];
}

export async function getCertificatesBySkill(
  skill: string,
): Promise<CertificateDto[]> {
  const certificatesQuery = gql`
    query certificatesBySkill($skill: String!) {
      certificatesBySkill(skill: $skill) {
        certifier
        skill
        year
        link
      }
    }
  `;
  const variables = { skill: skill };
  return (await requestApi(certificatesQuery, variables))[
    "certificatesBySkill"
  ];
}
