/*
 * @Descripttion: 配置文件
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-09-28 15:46:53
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-02-07 11:00:14
 */

const plugins = require('./config/plugins')
const nav = require('./config/nav/index')
const sidebar = require('./config/sidebar')
module.exports = {
  title: '来弟有话说',
  description: '',
  dest: 'public',
  // base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css' }],
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js',
      },
    ],
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js',
      },
    ],
    [
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js',
      },
    ],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/MouseClickEffect.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'dark',
    noFoundPageByTencent: true,
    logo: './public/auto.jpeg',
    // valineConfig: {
    //   appId: 'e6ojaBbYmQvJLNWeBouhonP6-gzGzoHsz', // your appId
    //   appKey: '050ScrJoJUW37QqwVwzSmKoX', // your appKey
    // },
    nav,
    sidebar,
    type: 'blog',
    blogConfig: {
      tag: {
        location: 3,
        text: '无关紧要的小标签',
      },
    },
    friendLink: [
      {
        title: 'Lucifer',
        desc: 'Everything can be expected in the future.',
        email: '2050180797@qq.com',
        logo: 'https://nightliuguoxing-github-io.vercel.app/img/avatar.jpg',
        link: 'https://love.liuguoxing.top',
      },
      {
        title: '午后南杂',
        desc: '一款简洁而优雅的 vuepress 博客 & 文档 主题。',
        email: '无',
        link: 'https://vuepress-theme-reco.recoluan.com/',
      },
    ],
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'rare',
    authorAvatar: './public/auto.jpeg',
    record: '无备案',
    startYear: '2021',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/assets',
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins,
}
