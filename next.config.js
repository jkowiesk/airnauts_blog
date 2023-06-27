const getAppEnvs = require('./scripts/getAppEnvs');

const envs = getAppEnvs();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: envs,
  compiler: {
    removeConsole: process.env.APP_ENV === 'production',
  },
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
