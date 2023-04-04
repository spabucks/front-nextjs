// @type {import('next').NextConfig}
//baseApiUrl: "http://124.216.167.29:8081",
// baseApiUrl: "http://10.10.10.173:8081",
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseApiUrl: "http://34.118.240.84:8080",
  },
  images: {
    domains: [
      "prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com",
      "shop-phinf.pstatic.net",
      "cdn.clien.net",
      "blog.kakaocdn.net",
      "image.istarbucks.co.kr",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
