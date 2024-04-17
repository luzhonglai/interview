/*
 * @Description:
 * @Author: luzhonglai
 * @Date: 2023-10-11 13:56:53
 * @LastEditors: luzhonglai
 * @LastEditTime: 2023-11-09 23:24:39
 * @FilePath: \web\interview\docs\test\订阅发布器.js
 */

class evsBus {
  constructor() {
    // 事件队列 标记
    this.map = {}
  }

  on(type, fn) {
    let fns = this.map[type]
    // 判断当前type 是否在队列
    if (!fns) {
      // 没有添加
      return (this.map[type] = [fn])
    }

    this.map[type].push(fn)
    console.log(this.map[type], type)
  }

  emit(type, ...args) {
    const fns = this.map[type]
    fns && fns.length && fns.map((fn) => fn(...args))
  }
}

const bus = new evsBus()


setTimeout(() => {
  bus.on('rare', function(arr) {
    console.log('吃饭了，我们走！' + arr)
  })
  
  bus.on('rare', function(arr) {
    console.log('吃饭了，我们走阿斯顿撒打算！' + arr)
  })
  
  bus.on('rare1', function(arr) {
    console.log('吃饭了，我们走！' + arr)
  })
  
  bus.on('rareasds1', function(arr) {
    console.log('吃饭萨达萨达是了，我们走' + arr)
  })
}, 1000)

bus.emit('rare', '111')

bus.emit('rare1', '2222')