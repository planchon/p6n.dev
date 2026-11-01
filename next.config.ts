// Hosts that serve this project but must not be indexed as duplicates:
// they permanently redirect (308) to the canonical origin, www.p6n.dev.
// p6n.dev → www.p6n.dev is configured in the Vercel domain settings.
const NON_CANONICAL_HOSTS = ["planchon.io", "www.planchon.io", "p6n.vercel.app"];

/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return NON_CANONICAL_HOSTS.map((host) => ({
			source: "/:path*",
			has: [{ type: "host", value: host.replaceAll(".", "\\.") }],
			destination: "https://www.p6n.dev/:path*",
			permanent: true,
		}));
	},
	images: {
		minimumCacheTTL: 3600,
		remotePatterns: [
			{
				hostname: "s3-us-west-2.amazonaws.com",
				protocol: "https",
				pathname: "/**",
			},
			{
				hostname: "pub-d7e41567b8c441739981cf0a85cfe38b.r2.dev",
				protocol: "https",
				pathname: "/**",
			},
			{
				hostname: "user-images.githubusercontent.com",
				protocol: "https",
				pathname: "/**",
			},
			{
				hostname: "fly.io",
				protocol: "https",
				pathname: "/**",
			},
		],
	},
};
