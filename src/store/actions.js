import {reqData, reqBanner, reqHome, reqDetail, reqNav} from '../api'
import {RECEIVE_DATA, RECEIVE_BANNER, RECEIVE_HOME, RECEIVE_DETAIL, RECEIVE_NAV} from './mutation-types'

export default {
  async getData({commit}, cb) {
    const result = await reqData();
    commit(RECEIVE_DATA, {data: result.data});
    cb && cb()
  },
  async getBanner({commit}, cb) {
    const result = await reqBanner();
    commit(RECEIVE_BANNER, {banner: result.banner});
    cb && cb()
  },
  async getHome({commit}, cb) {
    const result = await reqHome();
    commit(RECEIVE_HOME, {home: result.home});
    cb && cb()
  },
  async getDetail({commit}, cb) {
    const result = await reqDetail();
    commit(RECEIVE_DETAIL, {detail: result.detail});
    cb && cb()
  },
  async getNav({commit}, cb) {
    const result = await reqNav();
    commit(RECEIVE_NAV, {nav: result.nav});
    cb && cb()
  },
}
