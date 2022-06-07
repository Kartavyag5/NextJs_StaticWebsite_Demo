const execSync = require("child_process").execSync;

const lastCommitCommand = "git rev-parse HEAD";

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader'
    });
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  images: {
    loader: 'akamai',
    path: ''
  },
  async generateBuildId() {
    return execSync(lastCommitCommand).toString().trim();
  },
});
