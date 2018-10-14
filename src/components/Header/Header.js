import React , { Component } from "react";
import style from "./Header.less";
import Input from "../Input/Input.js";
import Icon from "../Icon/Icon.js";
import Search from "../Input/InputSearch";
import composeCls from "../../common/js/classnames";
import on from "../../common/js/util";
// eslint-disable-next-line

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { scrollDeriction: "" };
    }
    componentDidMount() {
        let lastScrollTop = 0;
        on(document, "scroll", () => {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({ scrollDeriction: (top - lastScrollTop) < 0 ? "top" : "bottom" });
            lastScrollTop = top;
        });
    }
    render() {
        const mainHeaderCls = composeCls(style["header-main-inner"], this.state.scrollDeriction === "bottom" ? style["header-main-bar"] : "");
        const secondHeaderCls = composeCls(style["header-second-inner"], this.state.scrollDeriction === "bottom" ? style["header-second-bar"] : "");
        return (
        <header className={ style["blog-header"] }>
            <div className={ style["header-wrapper"] }>
                <div className={ mainHeaderCls }>
                    <a className={ style["header-logo"] }></a>
                    <nav className={ style["header-nav"] }>
                        <a className={ style["header-articles-link"] }>文章</a>
                        <a className= { style["header-tags-link"] }>标签</a>
                        <a className = { style["header-all-link"] }>归档</a>
                    </nav>
                    <Search type="search" addAfter={ <Icon type="like"/> }/>
                </div>
                <div className={ secondHeaderCls }>
                    你好
                </div>
            </div>
        </header>)
    }
}

export default Header;