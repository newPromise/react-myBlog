import React , { Component } from "react";
import style from "./Input.less";
import * as PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFocus: false
        };
    };
    focusSearchInput(isFocus) {
        this.setState({
            hasFocus: isFocus
        });
    }
    static propTypes = {
        addBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        addAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        type: PropTypes.oneOf(["text", "search"]),
        placeholder: PropTypes.string
    }
    static defaultProps = {
        addAfter: null,
        addBefore: null,
        type: "text",
        placeholder: ""
    }
    render () {
        const { addBefore, addAfter, placeholder, type } = this.props;
        return (
            <div className= { `${style["input-wrapper"]} ${this.state.hasFocus ? style["input-focus"] : style["input-nonFocus"]}` }>
                { addBefore ? <div className={ style["input-before"] }>{ addBefore }</div> : null}
                <div className={ `${style["input-bar"]} ${addBefore && style["input-hasBefore"]} ${addAfter && style["input-hasAfter"]}` }>
                     <input 
                        type="text"
                        maxLength="50"
                        autoComplete="false"
                        placeholder= { placeholder } 
                        onFocus={ this.focusSearchInput.bind(this, true) }
                        onBlur={ this.focusSearchInput.bind(this, false) }/>
                </div>
                { addAfter ? <div className={ `${style["input-after"]} ${(type === "search" ? style["input-search"] : "")}` }>{ addAfter }</div> : null }
            </div>
        )
    }
}
export default Input;