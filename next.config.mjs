/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";
const nextConfig = {
  experimental: { forceSwcTransforms: true },
  images: {
    domains: ["static.cdn.asset.filimo.com", "img.freepik.com"],
  },
};

export default nextTranslate(nextConfig);
