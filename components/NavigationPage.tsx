// NavigationPage.tsx
import client from "../sanity/sanity.client";
import { navigationPageQuery, fetchLinkedPage } from "../queries";
import Header from "./header";
import {
  NavigationPage as NavigationPageType,
  NavigationLink,
} from "../interfaces/navigationPage";

async function getNavigationPage() {
  const navigationPage: NavigationPageType =
    await client.fetch(navigationPageQuery);
  return navigationPage;
}

async function getLinkedPage(id: string) {
  const linkedPage = await client.fetch(fetchLinkedPage, { id });
  return linkedPage;
}

export default async function NavigationPage() {
  const navigationPage = await getNavigationPage();

  if (!navigationPage) {
    return <div>No content available</div>;
  }

  const linkedPages = await Promise.all(
    navigationPage.links?.map(async (link) => {
      const linkedPage = await getLinkedPage(link._ref);
      return linkedPage;
    }) || []
  );

  return (
    <><Header /><div>
      <h1>{navigationPage.title}</h1>
      {navigationPage.description && <p>{navigationPage.description}</p>}
      <ul>
        {linkedPages.map((page) => (
          <li key={page._id}>
            <a href={`/${page.url}`} target="_blank" rel="noopener noreferrer">
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </div></>
  );
}
