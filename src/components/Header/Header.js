import React , { Component } from "react";
import style from "./Header.less";
import Input from "../Input/Input.js";

class Header extends Component {
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
                <Input type="search"/>
            </div>
        </header>)
    }
}

export default Header;