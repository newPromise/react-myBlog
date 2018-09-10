import React , { Component } from "react";
import * as PropTypes from 'prop-types';
import './Icon.less';

const iconTypes = ["return", "enter", "like", "like_fill"]
const defaultIconConfig = {
    strokeWidth: 100,
    stroke: "blue"
};


class Icon extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        type: PropTypes.oneOf(iconTypes),
        className: PropTypes.oneOfType([PropTypes.string]),
        theme: PropTypes.oneOf(["outline", "fill", ""])
    }
    static defaultProps = {
        theme: "outline"
    }
    render () {
        const Svg = ({type, className, style, color, theme }, ...props) => {
            !style && (style = {});
            const fontSize = "inherit" || (style || style.fontSize);
            if (theme === "outline") {
                style.stroke = color;
                style.fill = "currentColor";
            } else if (theme === "fill") {
                style.fill = color;
            }
            return (
                <i className= { "iconfont" } style={{ fontSize, color: "transparent" }}>
                    <svg className= { `icon ${ className ? className : "" }` } aria-hidden="true" style = { style }  strokeWidth="100">
                        <use xlinkHref= { `#icon-${type}` } ></use>           
                    </svg>
                </i>
            );
        }
        return Svg(this.props);
    }
}
export default Icon;