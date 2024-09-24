/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{  
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://i.ibb.co',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
