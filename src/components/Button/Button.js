import React, { Component } from "react";
import style from "./Button.less";
import * as PropTypes from 'prop-types';


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
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        type: PropTypes.oneOf(["primary", "success", "error", "text"]),
        size: PropTypes.oneOf(["small", "default", "large"]),
        style: PropTypes.object
    }
    render() {
        const { prefixCls } = this.state;
        const Button= ({ type, size, btnStyle, text, onClick }, ...props) => {
                return <button style={ btnStyle } className = { style[`${prefixCls}-${size}-${type}`] } onClick={ onClick }>{ text }</button>
        };
        return Button(this.props);
    }
}

export default Button;