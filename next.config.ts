// next.config.ts
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repoName = '/jacoposlist'  // ← your GitHub repo name

const nextConfig: NextConfig = {
  // 1. static–export everything
  output: 'export',

  // 2. disable Next’s Image Optimization API
  images: {
    unoptimized: true,
  },

  // 3. ensure paths work on GitHub Pages
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? `${repoName}/` : '',
  trailingSlash: true,
}

export default nextConfig
