/** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config, { isServer }) => {
//         if (!isServer) {
//           config.module.rules.push({
//             test: /\.(mp3|ogg|wav)$/i,  // Add any other audio file extensions you need
//             use: {
//               loader: 'file-loader',
//               options: {
//                 name: '[name].[ext]',
//                 publicPath: '/_next/static/sounds', // Change this path based on your project structure
//                 outputPath: 'static/sounds',
//               },
//             },
//           });
//         }
    
//         return config;
//       },
// }

// module.exports = nextConfig

module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp3)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/sounds', // Output path for the bundled MP3 files
            publicPath: '/_next/static/sounds', // Public URL for the MP3 files
          },
        },
      });
  
      return config;
    },
  };  