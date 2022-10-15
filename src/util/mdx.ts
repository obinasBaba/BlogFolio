import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import readingTime from 'reading-time';

// rehype plugins
import imageSize from 'rehype-img-size';
import RehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus'

const rootDirectory = `${process.cwd()}/src`;

export type Matter = {
  title: string;
  date: string;
  thumbnailUrl: string;
  excerpt: string;
  slug: string;
  readingTime: Record<string, any>;
  tags: string[];
};

// get sorted mdx post
export async function getSortedPost() {
  const postDirectory = path.join(rootDirectory, 'posts');

  const files = fs.readdirSync(postDirectory);

  const postLists: Matter[] = [];

  if (!files) throw new Error('You path for the blog file is not correct ----');

  files.forEach((file) => {
    const filePath = path.join(postDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    data.tags = {}

    // console.log('matter: ', data);

    postLists.push({
      ...(data as any),
      slug: file.replace('.mdx', ''),
      readingTime: readingTime(content),
    });
  });

  // Sort posts by date

  return postLists.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

// get post type dir
export async function getPostDir() {
  return fs.readdirSync(path.join(rootDirectory, 'posts'));
}

// get file by slug

export async function getFileBySlug(slug: string) {
  // get file content
  const fileContent = fs.readFileSync(
    path.join(rootDirectory, 'posts', `${slug}.mdx`),
    'utf8',
  );

  const { data, content } = matter(fileContent);
  data.tags = {}

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        // [remarkPrism, { plugins: ["line-numbers"] }]
      ],

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

  // console.log('MDX frontmatter: ----', mdxSource);

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
