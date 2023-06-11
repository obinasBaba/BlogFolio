import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';
import rehypePrismPlus from 'rehype-prism-plus';
import RehypeSlug from 'rehype-slug';
import imageSize from 'rehype-img-size';

/** @type {import("contentlayer/source-files").ComputedFields} */
const computedFields: any = {
  url_path: {
    type: 'string',
    resolve: (post: any) => {
      // console.log('post argument -------> ', post);
      return `/articles/${post._raw.flattenedPath}`;
    },
  },
  slug: {
    type: 'string',
    resolve: (post: any) => {
      // console.log('post argument -------> ', post);
      return `${post._raw.flattenedPath}`;
    },
  },
  readingTime: {
    type: 'string',
    resolve: (post: any) => {
      // console.log('post argument -------> ', post);
      return readingTime(post.body.raw).text;
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    thumbnailUrl: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    excerpt: { type: 'string', required: true }, // slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      RehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
        },
      ],
      [rehypePrismPlus, { ignoreMissing: true }],
      [imageSize as any, { dir: 'public' }],
    ],
  },
});
