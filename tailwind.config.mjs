/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'bg': '#D8E4E4',
				'text': '#000000',
				'highlighted': '#F88081',
				'link': '#A44A3F',
				'heading': '#000D83',
				'subheading': '#000D83',
				'bg-dark': '#111',
				'text-dark': '#eee',
				'highlighted-dark': 'rgb(250 204 21 / 0.7)',
				'link-dark': '#DAFF3E',
				'heading-dark': '#fff',
				'subheading-dark': '#fff'		
			},
			backgroundImage: {
				'bento': 'url(/public/post.webp)',
			}
		}
	},
	plugins: [],
}
