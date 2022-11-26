import SanityClientConstructor from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const client = SanityClientConstructor({
//   projectId: "qwoxusny",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

const client = SanityClientConstructor({
  projectId: "tydcz5rd",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
