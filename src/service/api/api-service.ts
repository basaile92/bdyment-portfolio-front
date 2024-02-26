import request, { RequestDocument } from "graphql-request";

const ENDPOINT: string = "https://bdyment.com/api/graphql";

export function requestApi(
  query: RequestDocument,
  variablesAndRequestHeaders?: any,
): Promise<any> {
  if (variablesAndRequestHeaders) {
    return request(ENDPOINT, query, variablesAndRequestHeaders);
  }
  return request(ENDPOINT, query);
}
