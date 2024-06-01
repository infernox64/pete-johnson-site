// interfaces/galleryImage.ts
export interface GalleryImage {
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    caption?: string;
  }
  

  