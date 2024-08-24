
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    /* false：默认情况下不启用暗模式
    * 'media'：基于用户操作系统或浏览器的颜色模式偏好（如操作系统的暗模式设置）来启用暗模式
    *'class'： 基于CSS 类来手动控制暗模式
     */
  darkMode: 'media',  // 可选值:false, 'media' 或 'class'
  theme: {
    extend: {
      screens: {
        'sm': '414px',   // 设置为你的移动端设计稿宽度
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1920px', // 设置为你的PC端设计稿宽度
      },
      maxWidth: {
        'site': '1920px',  // 定义一个自定义宽度
      },
      colors: {
        // bg: 'var(--color-bg)',
        // text: 'var(--color-text)',
        // primary: 'var(--color-primary)',
        // secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%', // 使容器宽度撑满
          maxWidth: '100%', // 确保在不同的屏幕尺寸下都是 100%
        },
      });
    },
    // function ({ addBase }) {
    //   addBase({
    //     'html': {
    //       fontSize: '41.4px', // 默认移动端 1rem = 41.4px
    //     },
    //     '@screen md': {
    //       'html': {
    //         fontSize: '76.8px', // 平板端 1rem = 76.8px
    //       },
    //     },
    //     '@screen lg': {
    //       'html': {
    //         fontSize: '192px', // PC 端 1rem = 192px
    //       },
    //     },
    //   });
    // },
  ],
}
