import HomePage from "../src/pages/HomePage/index";
import Article from "../src/pages/Article";

// 全部的路由配置
const routes = [{
    path: '/',
    component: HomePage,
    isExec: true, // 开启是否要进行严格匹配
}, {
    path: '/article/:id',
    component: Article
}];
export default routes;