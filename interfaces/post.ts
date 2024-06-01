// interfaces/post.ts
interface AdditionalImage {
    image: {
      asset: {
        _ref: string;
      };
      caption?: string;
    };
  }
  
  export interface Post {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    body: {
      _key: string;
      _type: 'block';
      children: [
        {
          _key: string;
          _type: 'span';
          text: string;
        }
      ];
      markDefs: [];
      style: 'normal';
    }[];
    mainImage: {
      asset: {
        _ref: string;
      };
    };
    additionalImages?: AdditionalImage[];
  }
  