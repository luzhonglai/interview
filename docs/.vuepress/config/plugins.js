/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-11-24 14:58:22
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-11-26 11:12:12
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
    '@vuepress/medium-zoom', {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  ],
  // 音乐插件
  // [
  //   'meting',
  //   {
  //     metingApi: "https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=7653249637&r=0.06430558894529903",
  //     meting: {
  //       // 网易
  //       server: 'tencent',
  //       // 读取歌单
  //       type: 'playlist',
  //       mid: '7653249637',
  //     },
  //     // 不配置该项的话不会出现全局播放器
  //     aplayer: {
  //       // 吸底模式
  //       fixed: true,
  //       mini: true,
  //       // 自动播放
  //       autoplay: true,
  //       // 歌曲栏折叠
  //       listFolded: true,
  //       // 颜色
  //       theme: '#f9bcdd',
  //       // 播放顺序为随机
  //       order: 'random',
  //       // 初始音量
  //       volume: 0.1,
  //       // 关闭歌词显示
  //       lrcType: 0,
  //     },
  //     mobile: {
  //       // 手机端去掉cover图
  //       cover: false,
  //     },
  //   },
  // ],

  ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    title: '扫扫有惊喜🎉🎉🎉',
    body: [
      {
        type: 'title',
        content: '欢迎关注公众号 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/wechat.jpg'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/view/auto'
      },
    ]
  }],
  // 评论插件
  ['@vuepress-reco/comments', {
    solution: 'valine',
    options: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }],
  /* 弹窗公告插件
  [
    "@vuepress-yard/vuepress-plugin-window"
  ], */
]
