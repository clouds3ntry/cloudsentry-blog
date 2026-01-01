interface DisqusConfig {
	enabled: boolean
	shortname: string
}

const validateDisqusConfig = (config: DisqusConfig): void => {
	if (config.enabled && !config.shortname.trim()) {
		throw new Error('Disqus shortname is required when enabled')
	}
}

export const disqusConfig: DisqusConfig = {
	enabled: false,
	shortname: ''
}

try {
	validateDisqusConfig(disqusConfig)
} catch (error) {
	console.error(
		'Disqus config validation failed:',
		error instanceof Error ? error.message : 'Unknown error'
	)
}
