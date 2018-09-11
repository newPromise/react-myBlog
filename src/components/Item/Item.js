import React , { Component } from "react";
import style from "./Item.less";
import * as PropTypes from 'prop-types';
import Icon from "../Icon/Icon.js";

class Item extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        hasCloseBtn: PropTypes.bool,
        extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        itemIcon: PropTypes.element
    }
    static defaultProps = {
        text: "",
        hasCloseBtn: false,
        extra: "",
        itemIcon: <Icon/>
    }
    render () {
        const ItemRender = ({ text, hasCloseBtn, extra, itemIcon }) => {
            return (
                <div className={ style["blog-item-wrapper"] }>
                    <div className={ style["blog-item-content"] }>
                        <div className={ style["blog-item-icon"] }>
                            <span>
                                { itemIcon }
                            </span>
                        </div>
                        <div className= { style["blog-item-main"] }>
                            <div className={ style["blog-item-title"] }>{ text }</div>
                            <div className={ style["blog-item-label"] }></div>
                        </div>
                        <div className={ style["blog-item-extra"] }>
                            <span>
                                { hasCloseBtn ? <Icon type="close"/> : extra }
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
        return ItemRender(this.props);
    }
}

export default Item;