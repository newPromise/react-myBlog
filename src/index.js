import React, { Component } from 'react';
import reactDom from 'react-dom';
import './common/css/index.less';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import routes from "./route";
import './assets/font/reset.less';

class App extends Component {
    render() {
        return (
            <div className="blog-container">
                { routes.map((route, index) => <Route exact= { route.isExec } path={ route.path } key = { index } component={ route.component }/>) }
            </div>
        );
    }
};

const Routerapp = withRouter(App); // use withRouter 来实现编程式导航
reactDom.render(<Router><Routerapp/></Router>, document.getElementById("root"));

export default App;