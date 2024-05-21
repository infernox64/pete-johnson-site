// schemas/imageGallery.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the image gallery.",
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineType({
          name: "galleryImage",
          title: "Gallery Image",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
