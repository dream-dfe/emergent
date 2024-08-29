/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ovdqhwabadvupzy6.public.blob.vercel-storage.com"
            },
                       
        ]
    }
}

module.exports = nextConfig
