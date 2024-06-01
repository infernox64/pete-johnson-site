// schemas/navigationPage.ts
import { defineField, defineType } from 'sanity';
import { FaLink } from 'react-icons/fa';

const navigationPage = defineType({
  name: 'navigationPage',
  title: 'Navigation Page',
  type: 'document',
  icon: FaLink,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'aboutPage' },       // Reference to aboutPage schema
            { type: 'mainContent' },     // Reference to mainContent schema
            { type: 'post' },            // Reference to post schema
            { type: 'imageGallery' },    // Reference to imageGallery schema
          ],
        },
      ],
    }),
  ],
});

export default navigationPage;
