
const path = require("path");
const fs = require("fs");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const CracoWorkboxPlugin = require('craco-workbox-plugin'); // 如果你使用 craco-workbox-plugin
const {InjectManifest,GenerateSW} = require('workbox-webpack-plugin');
// 根据环境加载不同的配置文件
const env = process.env.REACT_APP_ENV || "development";
const envPath = path.resolve(__dirname, `.env.${env}`);
if (fs.existsSync(envPath)) {
  require("dotenv").config({ path: envPath });
} else {
  console.warn(`环境配置文件 ${envPath} 不存在`);
}
console.log('envPath==',envPath)
module.exports = {
  style: {
    postcss: {  
      /**
       * 1：file 模式使用项目根目录中的 postcss.config.js 文件配置 PostCSS 插件
       * 2：extends 模式允许你在 craco.config.js 中扩展或覆盖 postcss.config.js 文件中的配置，这种模式适用于你希望在保持 postcss.config.js 文件中的大部分配置不变的情况下，添加或修改某些特定的 PostCSS 配置。
       */
      mode: "file",
    },
    sass: {
      loaderOptions: {
        additionalData: `@import "src/assets/css/variables.scss";`, // 全局导入 SCSS 变量文件，使得所有 SCSS 文件都可以访问这些变量
      },
    },
  },
  webpack: {
    
    alias: {
      "@": path.resolve(__dirname, "src"), // 创建别名 '@'，使其指向 'src' 目录，方便导入模块
    },
 
    // 可以在 configure 中进一步定制
    configure: (webpackConfig, { env, paths }) => {
      //    // 修改 Webpack 的 output 配置
      // webpackConfig.output = {
      //   ...webpackConfig.output,
      //   path: path.resolve(__dirname, 'dist'),
      //   filename: '[name].[contenthash].js', // 可选: 使用 contenthash 生成唯一的文件名
      // };
        // 添加 Workbox 插件
        webpackConfig.plugins.push(
          new GenerateSW({
            // Define Workbox options here
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
              {
                urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp)$/,
                /**
                 * CacheFirst：首先尝试从缓存中获取资源，如果缓存中没有，则从网络获取
                 * NetworkFirst： 首先尝试从网络获取资源，如果网络请求失败，则从缓存中获取
                 * StaleWhileRevalidate：从缓存中获取资源并返回，同时在后台更新缓存中的资源
                 * NetworkOnly：只从网络中获取资源，不使用缓存
                 * CacheOnly：只从缓存中获取资源，如果缓存中没有则返回错误
                 */
                handler: 'CacheFirst',
                options: {
                  cacheName: 'hb_website_images-cache',
                  expiration: {
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                  },
                },
              },
              {
                urlPattern: new RegExp('https://api.u1s1.biz/.*'),
                handler: 'NetworkFirst',
                options: {
                  cacheName: 'hb_website_api-cache',
                  expiration: {
                    maxEntries: 20,
                    maxAgeSeconds: 5 * 60, // 5 Minutes
                  },
                },
              },
            ],
          })
        );
  
      //模块化打包
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          chunks: env === 'production'?"all":"async", //生产环境使用'all' 对所有模块进行分割;开发环境使用async异步模块的分割
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: "vendor",
              chunks: env === 'production'?"all":"async",
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              enforce: true,
            },
            common: {
              name: "common",
              minChunks: 2,
              chunks: "async",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        runtimeChunk: false,// 启用默认的 runtime chunk 配置
      };
      
      const imageRule = {
        test: /\.(png|jpe?g|gif|svg)$/i,//匹配各种图片后缀结尾的文件名，i/不区分大小写。
        type: 'asset/resource',//是 Webpack 5 中的一种资源处理类型，表示这些文件将被处理为资源文件。
        generator: {//用于配置输出文件的名称和路径。
          filename: 'images/[hash][ext][query]',//指定了输出文件的路径和文件名格式。
        },
      };
      webpackConfig.module.rules.push(imageRule);
    /*   const fontRule = {//暂无字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      };
      webpackConfig.module.rules.push(fontRule);
 */
        // 添加 Gzip 压缩插件
        webpackConfig.plugins.push(
          new CompressionWebpackPlugin({
            filename: '[path][base].gz',//定压缩后的文件名。[path][base].gz 表示原文件路径和文件名后缀加 .gz。
            algorithm: 'gzip',//压缩算法，设置为 'gzip'
            test: /\.js$|\.css$|\.html$|\.svg$/,//压缩的是编译后js文件(.js)、CSS 文件 (.css)、HTML 文件 (.html) 和 SVG 文件 (.svg)。这些文件是最终生成的文件格式，应该被压缩。
            threshold: 8192, // 只有大小大于这个值的文件会被处理
            minRatio: 0.8, // 只有压缩率小于这个值的文件会被处理
          })
        );
      return webpackConfig;
    },
  },
  eslint: {
    enable: false, // 禁用 ESLint，防止 ESLint 检查和报错
  },
};
