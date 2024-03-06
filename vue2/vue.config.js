const { defineConfig } = require('@vue/cli-service')

const noRem = process.env.NODE_NOREM // 是否不转换为 rem
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  productionSourceMap: false, // 生产打包时不输出map文件，加快打包速度
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            !noRem && require("postcss-pxtorem")({
              // 配置文档：https://www.npmjs.com/package/postcss-pxtorem
              rootValue: 100, // 根元素字体大小
              unitPrecision: 6, // 转换成rem后保留的小数点位数
              propList: ["*"], // 匹配CSS中的属性，* 代表启用所有属性
              // exclude: /(node_module)/, // 忽略一些文件，不进行转换，默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
              // selectorBlackList: [".el"], // 要忽略并保留为 px 的选择器
              mediaQuery: false, //（布尔值）允许在媒体查询中转换px
              minPixelValue: 1, // 设置要替换的最小像素值
            }),
          ],
        }
      },
    },
  },
})
