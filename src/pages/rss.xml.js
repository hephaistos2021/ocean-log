import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');

  // Filter out draft posts in production and sort by date
  const publishedPosts = (
    import.meta.env.PROD
      ? posts.filter(post => !post.data.draft)
      : posts
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'ocean-log',
    description: '개발자의 깊은 바다 항해 일지',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>ko</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}
