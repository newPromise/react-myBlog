import React, { Component } from 'react';
import reactDom from 'react-dom';

class App extends Component {
    render() {
        return <div>hell world</div>
    }
}
reactDom.render(<App/>, document.getElementById("root"));