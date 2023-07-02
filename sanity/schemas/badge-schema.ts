const badge = {
  name: "badge",
  title: "Badge",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "display",
      title: "Display",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "tagUrl",
      title: "Tag URL",
      type: "url",
    },
    {
      name: "skillUrl",
      title: "Skill URL",
      type: "url",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Language", value: "language" },
          { title: "Framework", value: "framework" },
          { title: "IDE", value: "ide" },
          { title: "Algorithm", value: "algorithm" },
          { title: "Field", value: "field" },
          { title: "IDE", value: "ide" },
        ],
        layout: "dropdown", // or 'radio'
      },
    },
    {
        title: 'Level',
        name: 'level',
        type: 'string',
        options: {
          list: [
            {title: 'Beginner', value: 'beginner'},
            {title: 'Intermediate', value: 'intermediate'},
            {title: 'Professional', value: 'professional'}
          ],
          layout: 'radio'
        }
      },
  ],
};

export default badge;
