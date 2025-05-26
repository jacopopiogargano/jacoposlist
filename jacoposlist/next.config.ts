import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns:  [new URL('https://www.google.com/**'),
    new URL('https://en.wikipedia.org/**')]
  },
  // …any other NextConfig options
}

export default nextConfig
