const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com', // Update this to match your actual hostname
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig; // Use export default instead of module.exports
  