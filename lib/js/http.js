import {Get,Post,Post1} from "./GlobalFunction.js"  //post1为header带参数 aid
// 注册 aid : 132
export const register = (p,aid) => Post1(p,aid,'/member/api/register')
// 登录 aid : 131
export const login = (p,aid) => Post1(p,aid,'/member/api/login')