// queries.ts
export const allPostsQuery = `*[_type == "post"]{title, slug, body}`;
export const postQuery = `*[_type == "post" && slug.current == $slug]{title, body}[0]`;
