/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    });
    return config;
  },
};

export default nextConfig;