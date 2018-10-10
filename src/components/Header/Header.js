import React , { Component } from "react";
import style from "./Header.less";
import Input from "../Input/Input.js";
import Icon from "../Icon/Icon.js";
import Search from "../Input/InputSearch";
// eslint-disable-next-line

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <header className={ style["blog-header"] }>
            <div className={ style["header-inner"] }>
                <a className={ style["header-logo"] }></a>
                <nav className={ style["header-nav"] }>
                    <a className={ style["header-articles-link"] }>文章</a>
                    <a className= { style["header-tags-link"] }>标签</a>
                    <a className = { style["header-all-link"] }>归档</a>
                </nav>
                <Search type="search" addAfter={ <Icon type="like"/> }/>
            </div>
        </header>)
    }
}

export default Header;