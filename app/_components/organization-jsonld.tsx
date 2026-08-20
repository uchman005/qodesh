import { organizationJsonLd } from "@/app/_lib/seo";
import { JsonLd } from "./json-ld";

export function OrganizationJsonLd() {
  return <JsonLd data={organizationJsonLd()} />;
}
