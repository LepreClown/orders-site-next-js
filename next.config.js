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
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/api/:path*',
	// 			destination: `https://prime-test-backend.onrender.com/prime/v1/:path*`,
	// 		},
	// 		{
	// 			source: '/uploads/:path*',
	// 			destination: `http://localhost:4200/uploads/:path*`,
	// 		},
	// 	]
	// },
}

module.exports = nextConfig
