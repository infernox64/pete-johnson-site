// queries.ts
export const allPostsQuery = `
*[_type == "post"]{
  title,
  slug {
    current
  },
  body,
  mainImage {
    asset->{
      _id,
      url
    }
  },
  additionalImages[] {
    image {
      asset->{
        _id,
        url
      }
    },
    caption
  }
}`;

export const postQuery = `
*[_type == "post" && slug.current == $slug]{
  title,
  slug {
    current
  },
  body,
  mainImage {
    asset->{
      _id,
      url
    }
  },
  additionalImages[] {
    image {
      asset->{
        _id,
        url
      }
    },
    caption
  }
}[0]`;
export const allGalleriesQuery = `
*[_type == "imageGallery"]{
  title,
  description,
  images[] {
    image {
      asset->{
        _id,
        url
      }
    },
    caption
  }
}`;

export const galleryQuery = `
*[_type == "imageGallery" && _id == $id]{
  title,
  description,
  images[] {
    image {
      asset->{
        _id,
        url
      }
    },
    caption
  }
}[0]`;
// queries.ts
export const aboutPageQuery = `
*[_type == "aboutPage"]{
  _id,
  fullName,
  headline,
  businessImage {
    asset->{
      _id,
      url
    },
    alt
  },
  shortBio,
  email,
  location,
  fullBio,
  socialLinks {
    twitter,
    FacebookURL
  },
  skills
}[0]`; // Fetching only one document since it's likely there will only be one about page

// queries.ts
export const navigationPageQuery = `
*[_type == "navigationPage"]{
  _id,
  title,
  description,
  links[]{
    _type,
    _ref
  }
}`;

export const fetchLinkedPage = `
*[_id == $id][0] {
  _type,
  _id,
  title,
  "url": slug.current
}`;
