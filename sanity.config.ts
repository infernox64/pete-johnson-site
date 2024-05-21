import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
//get config from .env file
const {
  BASE_URL,
  NEXT_PUBLIC_SANITY_API_VERSION,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
} = process.env;

// define and export sanity config
export default defineConfig({
  name: "default",
  title: "PJElec",
  basePath: BASE_URL || "/studio",
  version: NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-01",
  projectId:
    NEXT_PUBLIC_SANITY_PROJECT_ID || "your-default-project-id",
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
