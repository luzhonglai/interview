/*
 * @Descripttion: 
 * @version: 
 * @Author: Zhonglai Lu
 * @Date: 2019-09-03 06:07:46
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-11-24 11:20:16
 */

 
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '时间抽', link: '/timeline/', icon: 'reco-date' },
  { text: '关于我', 
    icon: 'reco-message',
    items: [
      // { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
      { text: 'GitHub', link: 'https://github.com/luzhonglai', icon: 'reco-github' },
      { text: '简书', link: 'https://www.jianshu.com/u/47d38dbe08a1', icon: 'reco-jianshu' },
      { text: 'CSDN', link: 'https://blog.csdn.net/weixin_43901986?spm=1001.2014.3001.5113', icon: 'reco-csdn' },
      // { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
      // { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
    ]
  }
]