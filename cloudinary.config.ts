interface CloudinaryConfig {
  name: string;
  api_key: string;
  api_secret: string;
  url: string;
}

let config: CloudinaryConfig = {
  name: process.env.CLOUDINARY_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
  url: process.env.CLOUDINARY_URL || "",
};

export default config;
