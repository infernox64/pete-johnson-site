import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'PJElec',
basePath: '/studio',
version: '03-24-2024',
    projectId: 'yniboxuh',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    
  schema: {
    types: schemaTypes,
  },
})
