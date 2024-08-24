
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue:12,
      unitPrecision: 2,
      propList: ["*"],// 将所有属性的 px 转换为 rem
      selectorBlackList: ['.ignore'],// 忽略的选择器
      replace: true,
      mediaQuery: false,// 不转换媒体查询中的 px
      minPixelValue: 2, // 仅转换大于2px的值
      exclude: /node_modules/i, // 排除 node_modules 目录
    },
  },
};
