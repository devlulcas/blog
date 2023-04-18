/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/posts/:slug",
				destination: "https://www.lucasrego.tech/blog/:slug",
				permanent: true,
				basePath: false,
			},
		];
	},
};

module.exports = nextConfig;
