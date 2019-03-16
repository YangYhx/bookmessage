// import {emaillist, tasklist} from '@/api/shortMsg'
export default {
  state: {
    addtype: '',
    previewUrl: '',
    sendTag: {}
  },
  getters: {
    getAddressee: state => state.addtype,
    getSendTags: state => state.sendTag
  },
  mutations: {
    Addaddress (state, val) {
      state.addtype = val
    },
    setsendTags (state, val) {
      state.sendTag = val
    },
    resetsendTags (state, val) {
      state.sendTag = val
    }
  },
  action: {
  }
}
