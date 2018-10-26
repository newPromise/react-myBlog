import React , { Component } from "react";
import style from "./index.less";

class Seize extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        seizeSty: ["80%", "30%", "50%", "100%"]
    };
    render() {
        const { seizeSty } = this.props;
        return (
            <div className={ style["blog-seize"] }>
                { seizeSty.map((wid, index) => <div key={ index } className={ style["blog-seize-bar"] } style={{ width: wid }}></div>) }
            </div>
        )
    }
};

export default Seize;