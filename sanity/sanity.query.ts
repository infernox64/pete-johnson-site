import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "aboutPage"]{
      _id,
      fullName,
      headline,
      businessImage {
        "image": asset->url,
        "alt": asset->metadata.alt
      },
      businessImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}
