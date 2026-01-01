import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: { site: string }) {
	try {
		const posts = await getCollection('blog')
		return rss({
			title: siteConfig.title,
			description: siteConfig.description,
			site: context.site,
			items: posts.map((post) => ({
				...post.data,
				link: `post/${post.slug}/`
			}))
		})
	} catch (error) {
		console.error('Error generating RSS feed:', error)
		throw new Error('Failed to generate RSS feed')
	}
}
