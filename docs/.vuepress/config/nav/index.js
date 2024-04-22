/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-01-24 17:17:37
 */

module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  {
    text: 'interview',
    icon: 'reco-document',
    items: [
      {
        text: 'Vue3.0',
        link: '/views/Vue/Api',
      },
    ],
  },
  { text: '前端小记', link: '/blogs/category1', icon: 'reco-tag' },
  { text: '时间抽', link: '/timeline/', icon: 'reco-date' },
  {
    text: '关于我',
    icon: 'reco-message',
    items: [{ text: 'GitHub', link: 'https://github.com/luzhonglai', icon: 'reco-github' }],
  },
]
