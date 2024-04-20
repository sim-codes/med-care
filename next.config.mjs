/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dpl2jpa3b/image/upload/v1/media/user/**',
          },
        ],
      },
};

export default nextConfig;
