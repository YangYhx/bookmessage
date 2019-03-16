export default {
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   * 修改成为自己的服务器的地址
   */
  baseUrl: {
    // dev: 'https://admin.geekbang.org/',
    // pro: 'https://admin.geekbang.org/'
    dev: 'https://localhost/',
    pro: 'https://localhost/'
  }
}
