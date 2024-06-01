// interfaces/aboutPage.ts

interface SocialLinks {
    twitter?: string;
    FacebookURL?: string;
  }
  
  interface BusinessImage {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  }
  
  export interface AboutPage {
    _id: string;
    fullName: string;
    headline: string;
    businessImage?: BusinessImage;
    shortBio?: string;
    email?: string;
    location?: string;
    fullBio?: any[]; // Adjust based on Portable Text types if needed
    socialLinks?: SocialLinks;
    skills?: string[];
  }
  