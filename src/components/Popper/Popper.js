import React , { Component } from "react";
import style from "./Popper.less";
import * as PropTypes from 'prop-types';
import BasePopper from "popper.js";

class Popper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopper: false,
            popperTimer: null
        };
        this.togglePopperShow = this.togglePopperShow.bind(this);
    }
    static propTypes = {
        content: PropTypes.element,
        children: PropTypes.element,
        offset: PropTypes.string
    }
    static defaultProps = {
        offset: "0px, 40px"
    }
    togglePopperShow(showPopper) {
        if (!showPopper) {
            const timer = setTimeout(() => {
                this.setState({ showPopper });
            }, 500);
            this.setState({ popperTimer: timer });
        } else {
            if (this.state.popperTimer) {
                clearTimeout(this.state.popperTimer);
            }
            this.setState({ showPopper });
        }
    }
    componentDidUpdate() {
        new BasePopper(this.refs.referEl, this.refs.popper, {
            placement: "bottom-start",
            modifiers: {
                offset: {
                    offset: this.props.offset
                }
            }
        });
    }
    render() {
        const { children, content } = this.props;
        return (
           <div className={ style["blog-popper"] }>
               <span ref="referEl" className={ style["blog-popper-referel"] } onMouseEnter={ this.togglePopperShow.bind(this, true)} onMouseLeave={ this.togglePopperShow.bind(this, false) }>{ children }</span>
               <div ref="popper" style={{ display: this.state.showPopper ? "block" : "none" }} className={ style["blog-popper-content"] }  onMouseEnter={ this.togglePopperShow.bind(this, true)}  onMouseLeave={ this.togglePopperShow.bind(this, false) }>{ content }</div>
           </div>
        );
    }
}

export default Popper;