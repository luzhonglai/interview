/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-11-24 14:58:22
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-01-24 16:28:43
 */

module.exports = [
  // 流程图插件
  ['flowchart'],
  // 标签加强
  ['vuepress-plugin-boxx'],
  // 动态标题
  [
    'dynamic-title',
    {
      showIcon: 'vuepress/smile.ico',
      showText: '(/≧▽≦/)欢迎帅哥美女！',
      hideIcon: 'vuepress/cry.ico',
      hideText: '(●—●)呜呜，不要走嘛！！',
      recoverTime: 2000,
    },
  ],
  // 更新刷新插件
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新',
      },
    },
  ],
  // 代码复制弹窗插件
  [
    'vuepress-plugin-nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!',
      },
    },
  ],
  [
    '@vuepress/medium-zoom',
    {
      selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16,
      },
    },
  ],

  [
    '@vuepress-reco/vuepress-plugin-bulletin-popover',
    {
      title: '扫扫有惊喜🎉🎉🎉',
      body: [
        {
          type: 'title',
          content: '欢迎关注公众号 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'image',
          src: '/wechat.jpg',
        },
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/views/auto/',
        },
      ],
    },
  ],
  // 评论插件
  [
    '@vuepress-reco/comments',
    {
      solution: 'valine',
      options: {
        appId: 'ED858vdyTKf2JTRBI1BzSo0E-gzGzoHsz', // your appId
        appKey: 'lp3V214cdCDb0CaqM9cboXdy', // your appKey
      },
    },
  ],
  [
    'vuepress-plugin-helper-live2d',
    {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)
        model: 'koharu',
        display: {
          position: 'left', // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false, // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 1, // 模型透明度(default: 0.8)
        },
      },
    },
  ],
  [
    'sakura',
    {
      num: 20, // 默认数量
      show: true, //  是否显示
      zIndex: 3, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
      },
    },
  ],
]
