import { separateByNewLine } from "../../utils/separation-utils";
import {
  getCertificates,
  getCertificatesBySkill,
} from "../api/certificates-api-service";
import { CertificateDto } from "../../dto/certificate-dto";

export async function certificates(parameter: string): Promise<string> {
  if (!parameter) {
    return (await getCertificates())
      .map(certificatesToString)
      .reduce(separateByNewLine, "");
  }
  return (await getCertificatesBySkill(parameter))
    .map(certificatesToString)
    .reduce(separateByNewLine, "");
}

function certificatesToString(certificate: CertificateDto): string {
  return `<div><div>
            <span class="title">${certificate.skill} </span>
            <span class="subject">certification by ${certificate.certifier}</span>
          </div>
          <div class="italic">${certificate.year}</div>
          <div class="link">${certificate.link}</div>
          </div>`;
}
