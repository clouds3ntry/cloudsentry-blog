interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog.cloudsentry.in', // Write here your website url
	author: 'CloudSentry', // Site author
	title: 'CloudSentry Blog', // Site title.
	description: 'Cloud, DevOps, Security & Engineering insights by CloudSentry', // Description to display in the meta tags
	lang: 'en-IN',
	ogLocale: 'en_IN',
	shareMessage: 'Share this CloudSentry post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
