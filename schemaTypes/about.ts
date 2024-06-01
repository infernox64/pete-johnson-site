import { defineField } from "sanity";
import { TiBusinessCard } from "react-icons/ti";
import { MdEmail} from "react-icons/md";
import { FaFacebook,FaTwitter} from "react-icons/fa";

const profile = {
  name: "aboutPage",
  title: "about us",
  type: "document",
  icon: TiBusinessCard,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    {
      name: "businessImage",
      title: "Image or logo to display",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "email",
      icon: MdEmail,
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "twitter",
          title: "Twitter URL",
          icon: FaTwitter,
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "FacebookURL",
          title: "Facebook URL",
          icon: FaFacebook,
          type: "url",
          initialValue: "https://facebook.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "specialties",
      type: "array",
      description: "Add a list of skills you specialize in",
      of: [{ type: "string" }],
    },
  ],
};

export default profile;
