/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile the shared workspace package (TS source, no build step).
  transpilePackages: ["@tax-platform/shared"],
  images: {
    // Add remote patterns here when real image hosts are known.
    remotePatterns: [],
  },
};

export default nextConfig;
