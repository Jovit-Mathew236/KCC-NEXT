/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/KCC-NEXT" : "",
  assetPrefix: isProd ? "/KCC-NEXT/" : "",
  output: isProd ? "export" : undefined, // <=== enables static exports
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
