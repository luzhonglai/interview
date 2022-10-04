/*
 * @Description:
 * @Author: luzhonglai
 * @Date: 2022-09-27 01:30:05
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-10-04 20:09:03
 * @FilePath: /blog/docs/test/evsBus.js
 */

class evsBus {
  constructor() {
    // 事件队列 标记
    this.map = new Map()
  }

  // 监听事件
  on(type, fn) {
    let fns = this.map[type]
    // 判断当前type 是否在队列
    if (!fns) {
      // 没有添加
      this.map[type] = []
    }
    this.map[type].push(fn)

    return this
  }

  // 发布事件
  emit(type, ...args) {
    const fns = this.map[type]
    fns && fns.length && fns.map((fn) => fn(...args))

    return this
  }

  // 删除事件回调
  off(type, callback) {
    // 没有传 删除订阅
    if (typeof type == undefined) {
      delete this.map
    }

    // type 传入删除指定类型
    if (typeof type == 'string') {
      // callback  删除指定事件的回调
      if (typeof callback == 'function') {
        this.map[type] = this.map[type].filter((cb) => cb !== callback)
      } else {
        // 删除整个事件
        delete this.map[type]
      }
    }
  }
}

// 测试
const bus = new evsBus()

bus.on('rare', function(arr) {
  console.log('rare  走了 回家' + arr)
})

bus.emit('rare', '111')
