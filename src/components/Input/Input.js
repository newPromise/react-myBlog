import React , { Component } from "react";
import style from "./Input.less";

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
    render () {
        return (
            <div className= { this.state.hasFocus ? style["input-focus"] : style["input-nonFocus"] }>
                <div className={ style["input-bar"] }>
                    <input type="text" maxLength="50" autoComplete="false" placeholder="fsf"  onFocus={ this.focusSearchInput.bind(this, true) } onBlur={ this.focusSearchInput.bind(this, false) }/>
                    <div className={ style["input-after"] }></div>
                </div>
            </div>
        )
    }
}
export default Input;