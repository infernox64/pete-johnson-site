// interfaces/post.ts
import { PortableText } from '@portabletext/react';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface AdditionalImage {
  image: SanityImage;
  caption?: string;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  body: any;
  mainImage?: SanityImage;
  additionalImages?: AdditionalImage[];
}
