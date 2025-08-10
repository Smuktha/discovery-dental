/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 💥 This enables static export
  trailingSlash: true, // optional: makes URLs end with `/` for static hosting compatibility
};

export default nextConfig;
