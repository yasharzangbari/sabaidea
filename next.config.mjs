/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";
const nextConfig = {
  experimental: { forceSwcTransforms: true },
};

export default nextTranslate(nextConfig);
