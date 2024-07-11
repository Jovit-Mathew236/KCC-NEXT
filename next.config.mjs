/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/KCC-NEXT",
  output: "export", // <=== enables static exports
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
