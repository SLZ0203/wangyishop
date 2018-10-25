import {reqData, reqBanner, reqHome, reqDetail, reqNav} from '../api'
import {RECEIVE_DATA, RECEIVE_BANNER, RECEIVE_HOME, RECEIVE_DETAIL, RECEIVE_NAV} from './mutation-types'

export default {
  async getData({commit}, cb) {
    const result = await reqData();
    commit(RECEIVE_DATA, {data: result.data});
    cb && cb()
  },
  //获取首页轮播图片
  async getBanner({commit}, cb) {
    const result = await reqBanner();
    commit(RECEIVE_BANNER, {banner: result.focusList});
    cb && cb()
  },
  async getHome({commit}, cb) {
    const result = await reqHome();
    commit(RECEIVE_HOME, {home: result.home});
    cb && cb()
  },
  //获取识物页数据
  async getDetail({commit}, cb) {
    const result = await reqDetail();
    commit(RECEIVE_DETAIL, {detail: result.detail});
    cb && cb()
  },
  //获取分类页导航
  async getNav({commit}, cb) {
    const result = await reqNav();
    commit(RECEIVE_NAV, {nav: result.nav});
    cb && cb()
  },
}
