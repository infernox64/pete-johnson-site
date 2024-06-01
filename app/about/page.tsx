// app/about/page.tsx
import client from "../../sanity.client";
import { aboutPageQuery } from "../../queries";
import { AboutPage } from "../../interfaces/aboutPage";
import { PortableText } from "@portabletext/react";
import {Image } from '@next/Image';

async function getAboutPage() {
  const aboutPage: AboutPage = await client.fetch(aboutPageQuery);
  return aboutPage;
}

export default async function AboutPage() {
  const aboutPage = await getAboutPage();

  if (!aboutPage) {
    return <div>No content available</div>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <h2>{aboutPage.fullName}</h2>
      <p>{aboutPage.headline}</p>
      {aboutPage.businessImage && (
        <img
          src={aboutPage.businessImage.asset.url}
          alt={aboutPage.businessImage.alt}
        />
      )}
      <p>{aboutPage.shortBio}</p>
      <p>Email: {aboutPage.email}</p>
      <p>Location: {aboutPage.location}</p>
      <div>
        <h3>Full Bio:</h3>
        <PortableText value={aboutPage.fullBio} />
      </div>
      <div>
        <h3>Social Links:</h3>
        {aboutPage.socialLinks && (
          <ul>
            {aboutPage.socialLinks.twitter && (
              <li>
                <a
                  href={aboutPage.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            )}
            {aboutPage.socialLinks.FacebookURL && (
              <li>
                <a
                  href={aboutPage.socialLinks.FacebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
      <div>
        <h3>Skills:</h3>
        <ul>
          {aboutPage.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
