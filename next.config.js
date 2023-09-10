/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
}

module.exports = nextConfig
