/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    baseApiUrl: 'http://10.10.10.173:8081'
  }
}

module.exports = nextConfig
