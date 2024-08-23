
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 37.5, // 基准值，1rem = 16px
      unitPrecision: 2,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
      exclude: /node_modules/i, // 排除 node_modules 目录
    },
  },
};
