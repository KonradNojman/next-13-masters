/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/product",
				destination: "/products",
				permanent: true,
			},
			{
				source: "/categories",
				destination: "/categories/t-shirts",
				permanent: true,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "**",
			},
		],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
