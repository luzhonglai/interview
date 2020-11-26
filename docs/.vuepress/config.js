/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-11-25 16:23:40
 */

const themeConfig = require('./config/theme')
const plugins = require('./config/plugins')

module.exports = {
  title: '来弟有话说',
  description:'专注前端技术分享和学习，持续更新前端开发实践中的坑，记录的苦逼生涯。',
  dest: "public",
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }],
    
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],

    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"
    }],

    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],

    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/live2d/autoload.js"
    }],
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins,
}