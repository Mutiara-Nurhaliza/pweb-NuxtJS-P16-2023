/** @type {import('payload/types').CollectionConfig} */
const BlogLog = {
  slug: "BlogLog",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "name",
      label: "Title",
      type: "text",
    },
    {
      name: "log",
      type: "text",
    },
    {
      name: "timestamp",
      type: "date",
      required: true,
    },
    {
      name: "action",
      type: "text",
      required: true,
    },
  ],
};

export default BlogLog;
