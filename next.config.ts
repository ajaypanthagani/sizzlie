const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/',  // Set prefix for static assets
  basePath: '/',     // Set base path for routing
  output: 'export',        // Set to export static HTML
  trailingSlash: true,     // Add trailing slashes to URLs (important for static exports)
};

export default nextConfig;