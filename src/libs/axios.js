import axios from 'axios'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //请求头配置
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.distroy(url)
      // const { data, status } = res
      // return { data, status }
      if (res.data.code !== 0) {
        if (res.data.error.code === -1004) {
          axios.post(`//admin.geekbang.org/user/scanurl`)
            .then((resData) => {
              if (resData.data.code === 0) {
                window.location.href = resData.data.data.url
              }
            })
            .catch((error) => {
              if (error) {
                iview.Message.error(`${error.error ? error.error.msg : '系统繁忙，稍后重试'}`)
              }
            })
        } else {
          return Promise.reject(res.data)
        }
      } else {
        return res.data.data
      }
    }, error => {
      this.distroy(url)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
