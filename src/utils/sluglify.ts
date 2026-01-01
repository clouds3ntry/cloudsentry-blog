export function sluglify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-&]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
}

export function unsluglify(text: string): string {
	return text.replace(/-/g, ' ')
}
