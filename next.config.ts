const nextConfig = {
    reactStrictMode: false,
    async rewrites(){
      return [
        {
          source: '/api/quote',
          destination: 'https://techquote.replit.app/quote'
        }
      ]
    }
  };
  
  module.exports = nextConfig;
  