/*属性计算的模块*/

//首页home数据处理
export default {
  newHome(state) {
    if (!state.home.tagList) {return}
    return state.home.tagList.slice(0, 4);
  }
}
