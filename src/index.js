import React, { Component } from 'react';
import reactDom from 'react-dom';
import Content from './pages/Content/Content.js';
import './common/css/index.less';

class App extends Component {
    render() {
        return <Content/>
    }
}
reactDom.render(<App/>, document.getElementById("root"));