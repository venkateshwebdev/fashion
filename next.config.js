/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
        domains:[
            "png.pngtree.com",
            "static.nike.com",
            "images.unsplash.com",
            "th.bing.com",
            "media.chicmi.com",
            "assets.ajio.com"
        ]
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig