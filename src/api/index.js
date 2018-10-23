/*
* 与后台交互模块
* */
import ajax from './ajax';

//获取data数据
export const reqData = () => ajax('/data');
//获取banner对象
export const reqBanner = () => ajax('/banner');
//获取home页数据
export const reqHome = () => ajax('/home');
//获取detail页数据
export const reqDetail = () => ajax('/detail');
//获取nav页数据
export const reqNav = () => ajax('/nav');
