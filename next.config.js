/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // eslint:{
  //   dirs: ['pages'] //add directories if needed
  // }
};

module.exports = {
  nextConfig,
  images: {
    domains: ['unsplash.it']
  },
  
  // IN CASE OF EMERGENCY
  // typescript: {
  //   ignoreBuildErrors:true,
  // }
};
