/**
 * Created by chen on 2018/10/10.
 */
/**
 * Created by chen on 2018/9/8.
 * 这里是一些常用方法的配置
 */
const myUtil = {}

// 去除字符串首尾空格
myUtil.trim = (str) => {
  str += ''
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/*
 * 日期格式
 * date要格式话的时间戳
 * format格式
 * */
myUtil.dateFormat = (date, format) => {
  if (!date) {
    date = new Date().getTime() / 1000
  }
  let Date2 = new Date(date * 1000)
  let dateObj = {
    'M+': Date2.getMonth() + 1,
    'd+': Date2.getDate(),
    'h+': Date2.getHours(),
    'm+': Date2.getMinutes(),
    's+': Date2.getSeconds(),
    'q+': Math.floor((Date2.getMonth() + 3) / 3),
    'S+': Date2.getMilliseconds()
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (Date2.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in dateObj) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? dateObj[k] : ('00' + dateObj[k]).substr(('' + dateObj[k]).length))
    }
  }
  return format
}

/**
 *
 * @desc 将js时间改为php的时间戳
 * @return number
 * */
myUtil.phpStamp = (date) => {
  if (!date) {
    return parseInt(new Date().getTime() / 1000)
  } else {
    return parseInt(new Date(date).getTime() / 1000)
  }
}

/**
 *
 * @param 第一个参数是文本
 * 第二个参数是要比较的长度（中文下算2个英文算一个）
 * @return boolean
 *
 * */
myUtil.textLen = (text, len) => {
  if (!len) {
    len = 30
  }
  if (text.length > 0) {
    let count = 0
    for (let i = 0; i < text.length; i++) {
      var word = text[i]
      if (word.match(/[\u4e00-\u9fa5]/g) || word.match(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/)) {
        count += 2
      } else {
        count += 1
      }
    }
    return count > len
  }
}

/**
 * 计算字符串长度
 * 参数是要计算的字符串
 * 返回值当前字符串的长度
 */
myUtil.charactersLen = (words) => {
  let tempMapWordNum = {}
  let doubleByteTotal = 0 // 双字节
  let chineseTotal = 0 // 汉字
  let singleByteTotal = 0 // 单字节
  let numTotal = 0
  for (let i = 0; i < words.length; i++) {
    let c = words.charAt(i)
    if (c.match(/[\u4e00-\u9fa5]/)) { // 汉字
      if (isNaN(tempMapWordNum[c])) {
        tempMapWordNum[c] = 1
      }
      chineseTotal++
    }
  }
  for (let i = 0; i < words.length; i++) {
    let c = words.charAt(i)
    if (c.match(/[^\x00-\xff]/)) { // 这里^表示相反的意思,Ascii码大于255的那些字符，双字节的字符
      doubleByteTotal++
    } else {
      singleByteTotal++
    }
    if (c.match(/[0-9]/)) {
      numTotal++
    }
  }
  // 双字节的内容减去汉字剩下双字节标点，单字节内容减去数字剩下单字节符号
  return chineseTotal + (doubleByteTotal - chineseTotal) + (singleByteTotal - numTotal) + (numTotal)
}

export {myUtil}
