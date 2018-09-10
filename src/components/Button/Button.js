import React, { Component } from "react";
import style from "./Button.less";
import * as PropTypes from 'prop-types';
import Icon from "../Icon/Icon.js";


class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            prefixCls: "blog-button"
        }
    }
    static defaultProps = {
        type: "text",
        size: "small",
        text: ""
    }
    static propTypes = {
        text: PropTypes.string,
        type: PropTypes.oneOf(["primary", "success", "error", "text"]),
        size: PropTypes.oneOf(["small", "default", "large"]),
        style: PropTypes.object
    }
    render() {
        const { prefixCls } = this.state;
        const Button= ({ type, size, btnStyle, onClick }, ...props) => {
                return <button style={ btnStyle } className = { style[`${prefixCls}-${size}-${type}`] } onClick={ onClick }><Icon type="like" theme="fill" color="yellow"/><span>我是文章</span></button>
        };
        return Button(this.props);
    }
}

export default Button;