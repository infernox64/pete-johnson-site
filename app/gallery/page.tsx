// app/galleries/page.tsx
import client from '@/sanity/sanity.client';
import { allGalleriesQuery } from '@/queries';
import Image from 'next/image'
import { ImageGallery } from '@/interfaces/imageGallery';

async function getGalleries() {
  const galleries: ImageGallery[] = await client.fetch(allGalleriesQuery);
  return galleries;
}

export default async function GalleriesPage() {
  const galleries = await getGalleries(); // Use await here

  return (
    <div>
      {galleries.map((gallery) => (
        <div key={gallery.title}>
          <h2>{gallery.title}</h2>
          <p>{gallery.description}</p>
          <div>
            {gallery.images.map((image, index) => (
              <div key={index}>
                <Image src={image.image.asset.url} alt="" />
                {image.caption && <p>{image.caption}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
