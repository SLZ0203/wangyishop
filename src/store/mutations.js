import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV,
  LoginWay
} from './mutation-types'

export default {
  [RECEIVE_DATA](state, {data}) {
    state.data = data
  },
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },
  [RECEIVE_HOME](state, {home}) {
    state.home = home
  },
  [RECEIVE_DETAIL](state, {detail}) {
    state.detail = detail
  },
  [RECEIVE_NAV](state, {nav}) {
    state.nav = nav
  },
  [LoginWay](state, loginWay) {
    state.loginWay = loginWay
  },
}
