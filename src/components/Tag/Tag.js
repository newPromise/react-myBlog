import React , { Component } from "react";
import style from "./Tag.less";
import * as PropTypes from 'prop-types';
import joinCls from "../../common/js/classnames.js";

class Tag extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        type: "default"
    }
    static propTypes = {
        type: PropTypes.oneOf(["default", "success", "error", "warning"])
    }
    render() {
        const { children, color, type, onClick } = this.props;
        const baseTag = () => {
            const tagCls = () => {
                const cls = [ style["blog-tag"] ];
                let typeCls = "";
                let colorCls = "";
                if (type) typeCls = (style[`blog-tag-type--${type}`]);
                if (color) colorCls = (style[`blog-tag-color--${color}`]);
                return joinCls(cls, typeCls, colorCls);
            };
            return <div className={ tagCls() }>{ children }</div>;
        };
        return (
            baseTag()
        )
    }
}

export default Tag;