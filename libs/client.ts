import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kako-blog",
  apiKey: process.env.API_KEY ?? "",
});
