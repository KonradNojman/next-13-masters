/** @type {import('next').NextConfig} */
const nextConfig = {
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
				source: "/products/categories",
				destination: "/products",
				permanent: true,
			},
			{
				source: "/products/categories/:category",
				destination: "/products/categories/:category/1",
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
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
