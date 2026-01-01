import XIcon from '@/components/icons/XIcon.astro'
import GithubIcon from '@/components/icons/GithubIcon.astro'
import LinkedinIcon from '@/components/icons/LinkedinIcon.astro'

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'GitHub',
		url: 'https://github.com/clouds3ntry/',
		icon: GithubIcon
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/company/cloudsentry',
		icon: LinkedinIcon
	},
	{
		name: 'X',
		url: 'https://x.com/cloud_sentry',
		icon: XIcon
	}
] as const
