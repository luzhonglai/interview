/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-01-19 15:27:32
 */

module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  {
    text: 'interview',
    icon: 'reco-document',
    items: [
      {
        text: 'Vue3.0',
        link: '/views/Vue/',
      },
    ],
  },
  { text: '时间抽', link: '/timeline/', icon: 'reco-date' },
  {
    text: '关于我',
    icon: 'reco-message',
    items: [
      { text: 'GitHub', link: 'https://github.com/luzhonglai', icon: 'reco-github' },
      { text: '简书', link: 'https://www.jianshu.com/u/47d38dbe08a1', icon: 'reco-jianshu' },
      { text: 'CSDN', link: 'https://blog.csdn.net/weixin_43901986?spm=1001.2014.3001.5113', icon: 'reco-csdn' },
    ],
  },
]
