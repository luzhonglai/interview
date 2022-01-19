/*
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2022-01-18 11:40:32
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-01-18 11:45:18
 */
const deps = {
  '采购部':[1,2,3],
  '人事部':[5,8,12],
  '行政部':[5,14,79],
  '运输部':[3,64,105],
  }
  let member = [];
  for (let item in deps){
      const value = deps[item];
      if(Array.isArray(value)){
          member = [...member,...value]
      }
  }
  member = [...new Set(member)]
  console.log(member,'-----abc------')
  
  //改进
  // let member = Object.values(deps).flat(1)