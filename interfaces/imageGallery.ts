  // interfaces/imageGallery.ts
  import { GalleryImage } from './galleryImage';
  
  export interface ImageGallery {
    title: string;
    description: string;
    images: GalleryImage[];
  }