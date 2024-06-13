const dotenv = require("dotenv");
const nextConfig = {};

dotenv.config();

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	...nextConfig,
	images: {
		// domains: ["images.unsplash.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "http",
				hostname: "localhost",
			},
		],
	},
};
