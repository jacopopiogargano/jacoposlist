import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // enable `next export`
  output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'en.wikipedia.org',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
