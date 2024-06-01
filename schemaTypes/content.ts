import { defineField } from "sanity";
import { FaLink } from "react-icons/fa";


const content = {
    name:  'mainContent',
    title: 'Main Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ]
}
export default content;