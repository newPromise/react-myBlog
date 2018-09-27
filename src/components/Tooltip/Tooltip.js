import React , { Component } from "react";
import style from "./Tooltip.less";
import * as PropTypes from 'prop-types';
import BaseTooltip from "tooltip.js";



class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toooltipInstance: null
        };
        this.toggleTooltipShow = this.toggleTooltipShow.bind(this);
    }
    static propTypes = {
        children: PropTypes.element,
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        placement: PropTypes.string
    };
    static defaultProps = {
        children: null,
        title: "",
        placement: "top"
    };
    toggleTooltipShow(isShow) {
        const { toooltipInstance } = this.state;
        if (isShow) toooltipInstance.show();
        if (!isShow) toooltipInstance.hide();
    }
    componentDidMount() {
        const { title, placement } = this.props;
        const wrapTitle = title => {
            return `<div class="blog-tooltip-inner" style="background: black; color: white; padding: 5px 4px; font-size: 12px; border-radius: 4px; opacity: .8">${ title }</div>`
        };
        this.setState({
            toooltipInstance: new BaseTooltip(this.refs.reference, {
                title: wrapTitle(title),
                placement: placement,
                html: true,
                modifiers: {
                    applyStyle: { enabled: false }
                }
            })
        });
    }
    render() {
        const { children } = this.props;
        return (
            <div ref="reference" className={ style["blog-tooltip"] } onMouseEnter={ this.toggleTooltipShow.bind(this, true) } onMouseLeave={ this.toggleTooltipShow.bind(this, false) }>
                { children }
            </div>
        );
    }
}

export default Tooltip;