import React , { Component } from "react";
import * as PropTypes from 'prop-types';
import style from "./Input.less";
import Input from "./Input.js";
import Icon from "../Icon/Icon.js";
import Button from "../Button/Button.js";
import Popper from "../Popper/Popper.js";

class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(val) {
        console.log("val", val);
    }
    render() {
        const { onSearch } = this.props;
        const SearchPopper = () => {
            return (
                <div className={ style["search-popper"] }>
                    年后
                </div>
            );
        };
        const SearchBtn = () => {
            return <Button size="default" onClick={ () => { onSearch() } }  type="primary" text= { <Icon type="like"/> }></Button>
        };
        const InputSearch = (args) => {
            const width = args.props.width;
            return <Input type="search"  width={ width }  addAfter= { SearchBtn() } whenChange= { this.handleChange }></Input>
        };
        return <Popper visiable="fds" content={ <SearchPopper/> }><div className={ style["blog-search-popper"] }><InputSearch props={ this.props }/></div></Popper>
    }
}
export default InputSearch;