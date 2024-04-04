/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://storage.googleapis.com/cheerproject-01015/:path*'
            }
        ]
    }
};


export default nextConfig;
