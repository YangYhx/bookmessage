export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: '',
    access: [],
    branch: ''
  },
  getters: {
    getUserName: state => state.userName,
    getUserId: state => state.userId,
    getUserAvator: state => state.avatorImgPath,
    getUserBranch: state => state.branch
  },
  mutations: {
    logout (state) {
      state.userName = ''
      state.userId = ''
      state.avatorImgPath = ''
      state.token = ''
      state.access = []
      state.branch = ''
      sessionStorage.removeItem('access')
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('branch')
      sessionStorage.removeItem('avatar')
    },
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setUserBranch (state, branch) {
      state.branch = branch
    }
  },
  actions: {}
}
