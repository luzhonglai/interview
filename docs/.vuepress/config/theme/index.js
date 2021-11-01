/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-11-23 17:37:20
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-11-01 14:50:17
 */

const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // 自动形成侧边导航
  mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
  codeTheme: 'tomorrow',
  subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  friendLink: [
    // {
    //   title: '午后南杂',
    //   desc: 'Enjoy when you can, and endure when you must.',
    //   email: '1156743527@qq.com',
    //   link: 'https://www.recoluan.com',
    // },
    // {
    //   title: 'vuepress-theme-reco',
    //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //   avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
    //   link: 'https://vuepress-theme-reco.recoluan.com',
    // },
  ],
  noFoundPageByTencent: true,
  logo: '/auto.jpeg',
  search: true,
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated',
  author: 'it_rare',
  authorAvatar: '/auto.jpeg',
  record: 'xxxx',
  startYear: '2019',
})
