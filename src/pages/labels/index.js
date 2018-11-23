import React, { Component } from "react";
import Header from "../../components/Header/Header";
import style from  "./index.less";
import Content from "./content";
import Aside from "./aside";

class Labels extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ style["blog-labels"] }>
                <div className={ style["blog-labels-header"] }>
                    <Header/>
                </div>
                <div className={ style["blog-labels-holder"] }></div>
                <div className={ style["blog-labels-main"] }>
                    <div className={ style["bllg-labels-content"] }>
                        {/* <Content/> */}
                    </div>
                    <div className={ style["blog-labels-aside"] }>
                        {/* <Aside/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Labels;