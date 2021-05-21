import $ from 'jquery'
import store from '@/store/index.js'
import router from '@/router'
const install = function (Vue, options) {
  Vue.prototype.ajax = function (actionName, postData) {
    var baseurl
    // console.log('actionName:', actionName)
    // if (postData.payload) {
    //   postData.payload = JSON.parse(postData.payload)
    //   postData.payload.userId = store.state.userId
    //   postData.payload = JSON.stringify(postData.payload)
    // } 
    // else {
    //   if (typeof postData === 'string') {
    //     var zzPostData = JSON.parse(postData)
    //     zzPostData.userId = store.state.userId
    //     postData = JSON.stringify(zzPostData)
    //   } else {
    //     if (postData.userId) {
    //       // j
    //     } else {
    //       postData.userId = store.state.userId
    //     }
    //   }
    // }
    baseurl = store.state.baseServiceUrl + actionName
    return $.ajax({
      url: baseurl,
      type: 'POST',
      // 传递数组
      traditional: true,
      dataType: 'json',
      headers:{
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "token":sessionStorage.getItem('voteToken'),
      },
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
      async: true,
      xhrFields: {
        withCredentials: true,
        useDefaultXhrHeader: false
      },
      crossDomain: true,
      data: postData,
      success: function (data) {
        // console.log('ajax请求成功:success:', data)
        if (data.code === 201) {} else if (data.code === 300) {
          if (window.location.href.indexOf('FileLinkList') >= 0) {
            // j
          } else {
            router.push('/')
          }
        } else if (data.code === 404) {
          router.push('/page404')
        }
      },
      error: function (data) {
        console.log('ajax请求错误', data)
        if (window.location.href.indexOf('FileLinkList') >= 0) {
          // j
        } else {
          router.push('/Login')
        }
        // router.push('/Login')
        // router.push('/')
      }
    })
  }
  Vue.prototype.log = function (mark, cont) {
    if (store.state.debug) {
      if (arguments.length > 1) {
        return window.console.log(mark, cont)
      } else if (arguments.length === 1) {
        return window.console.log(mark)
      }
    }
  }
  /** this.log('getUserInfo:', res.data, 'only') */
  Vue.prototype.loglog = function (mark, cont, only) {
    // ** 如果debug开关打开
    if (store.state.debug) {
      // ** debugAll 是否调试全部 true:全部， false:个别或部分
      // if (store.state.debugAll) {
      //   if (arguments[2] === 'only') {
      //     return window.console.log(mark, cont)
      //   } else if (arguments[1] === 'only' || arguments.length === 1) {
      //     return window.console.log(mark)
      //   }
      // } else {
      //   if (arguments[2] === 'only') {
      //     return window.console.log(mark, cont)
      //   } else if (arguments[1] === 'only' || arguments.length === 1) {
      //     return window.console.log(mark)
      //   }
      // }
    }
  }
  Vue.prototype.alert = function (test) {
    if (store.state.debug) {
      return window.alert(test)
    }
  }
  // Vue.prototype.isImage = function (fileName) {
  //   if (fileName) {
  //     var geshi = fileName.substr(-4).indexOf('.') > -1 ? fileName.toLowerCase().substr(-3) : fileName.toLowerCase().substr(-4)
  //   }
  //   var isImg = false
  //   for (var i = 0; i < store.state.fileFormat.length; i++) {
  //     if (store.state.fileFormat[i] === geshi) {
  //       isImg = true
  //     } else {
  //       isImg = false
  //     }
  //   }
  //   return isImg
  // }
  // 判断是否是图片
  Vue.prototype.isImage = function (fileName) {
    var geshi = fileName.substr(-4).indexOf('.') > -1 ? fileName.toLowerCase().substr(-3) : fileName.toLowerCase().substr(-4)
    var isImg = false
    for (var i = 0; i < store.state.fileFormat.length; i++) {
      if (store.state.fileFormat[i] === geshi) {
        isImg = true
      }
    }
    return isImg
  }
  // 图片预览
  Vue.prototype.imgPreview = function (previewUrl, showName) {
    if (typeof previewUrl === 'string') {
      if (this.isImage(showName)) {
        // store.state.imgPreviewShow = true
        // store.state.imgPreviewSrc = previewUrl
        var newArr = []
        var obj = {
          previewUrl: previewUrl,
          showName: showName
        }
        newArr.push(obj)
        this.imgPreviewArr(newArr)
      } else {
        console.log('单张图片预览，首个参数可传字符串，或者数组，若为字符串，则第二个参数showName必传')
      }
    } else if (Array.prototype.isPrototypeOf(previewUrl)) {
      this.imgPreviewArr(previewUrl)
    }
  }
  // 多张图片预览
  Vue.prototype.imgPreviewArr = function (previewUrlArr, currentClickIndex) {
    // && this.isImage(fileName)
    if (previewUrlArr) {
      this.log(456)
      store.state.imgPreviewShow = true
      store.state.imgPreviewArr = previewUrlArr
      if (currentClickIndex >= 0) {
        store.state.currentClickIndex = currentClickIndex
      }
    }
  }
  // 金额格式检测 amountTest
  Vue.prototype.amountTest = function (moneyVal) {
    // var that = this
    // 输入值
    var iptval = moneyVal
    // 输入值长度
    var iptValLen = moneyVal.length
    // 输入值以 “ . ” 拆分的数组长度
    var iptValArrLen = iptval.split('.').length
    // “ . ”的索引位置
    var dotindex = iptval.indexOf('.')
    // 1、禁止输入空格
    if (iptval.indexOf(' ') >= 0) {
      iptval = iptval.slice(0, iptValLen - 1)
    }
    // 2、以 0 开头，第二位必须为“ . ”
    if (iptval.slice(0, 1) === '0' && iptValLen > 1) {
      if (iptval.slice(1, 2) !== '.') {
        iptval = iptval.slice(0, iptValLen - 1)
      }
    }
    // 3、不得大于50000
    if (Number(iptval) > 50000) {
      iptval = iptval.slice(0, iptValLen - 1)
    }
    // 4、不得输入非数字
    if (!Number(iptval) && Number(iptval) !== 0) {
      iptval = iptval.slice(0, iptValLen - 1)
    }
    // 5、首字符不得输入“ . ”
    if (iptval === '.') {
      iptval = ''
    } else if (iptValArrLen > 2) {
      // 6、禁止输入多个小数点
      iptval = iptval.slice(0, iptValLen - 1)
    } else if (iptValArrLen === 2) {
      if ((iptValLen - dotindex) > 3) {
        // 7、小数点后最多两位
        iptval = iptval.slice(0, iptValLen - 1)
      }
    }
    return iptval
  }
  // 检测浏览器类型
  Vue.prototype.testBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var isOpera = userAgent.indexOf('opera') > -1
    if (userAgent.indexOf('mobi') > -1) {
      // 手机浏览器
      return 'mobile'
    } else {
      if (isOpera) {
        return 'Opera'
      }
      if (userAgent.indexOf('firefox') > -1) {
        return 'FF'
      }
      if (userAgent.indexOf('chrome') > -1) {
        return 'Chrome'
      }
      if (userAgent.indexOf('safari') > -1) {
        return 'Safari'
      }
      if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('msie') > -1 && !isOpera) {
        return 'IE'
      }
      return '其它浏览器'
    }
  }
  // 获取当前时间
  Vue.prototype.getNowTime = function () {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = (myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)
    var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    var hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
    var min = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()
    var sec = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  }
  /**
   * 获取当日时间 时分秒默认00:00:00
   * includeToday: 是否包括今日 true：包括今日，即23:59:59 。 默认false：00:00:00
   */
  Vue.prototype.getTodayTime = function (includeToday) {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = (myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)
    var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    var dataFormart = ''
    if (includeToday) {
      dataFormart = year + '-' + month + '-' + date + ' 23:59:59'
    } else {
      dataFormart = year + '-' + month + '-' + date + ' 00:00:00'
    }
    return dataFormart
  }
  /**
   * 获取基于某个时间的某段时间之后的时间 如：获取一小时后的时间
   * 第一个参数为时间段，整数，以毫秒计
   * 第二个参数为基于的时间 字符串，默认当前
   */
  Vue.prototype.getLaterTime = function (msecond, btime) {
    var myDate = btime ? new Date(btime) : new Date()
    var laterTimeStamp = myDate.getTime() + msecond
    myDate = new Date(laterTimeStamp)
    var year = myDate.getFullYear()
    var month = (myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)
    var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    var hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
    var min = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()
    var sec = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  }
  Vue.prototype.getBeforeTime = function (msecond, btime) {
    var myDate = btime ? new Date(btime) : new Date()
    var laterTimeStamp = myDate.getTime() - msecond
    myDate = new Date(laterTimeStamp)
    var year = myDate.getFullYear()
    var month = (myDate.getMonth() + 1) < 10 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)
    var date = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    var hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
    var min = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()
    var sec = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  }
  // 常规时间格式 兼容苹果的时间格式 replace(/-/g, '/')
  Vue.prototype.dateCompatibility = function (baseDate) {
    var finalDate = ''
    if (this.testBrowser() === 'Safari') {
      finalDate = baseDate.replace(/-/g, '/')
    } else {
      finalDate = baseDate
    }
    return finalDate
  }
}
export default {
  install
}
