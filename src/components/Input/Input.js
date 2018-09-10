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
        addAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    }
    static defaultProps = {
        addAfter: null,
        addAfter: null
    }
    render () {
        const { addBefore, addAfter } = this.props;
        return (
            <div className= { `${style["input-wrapper"]} ${this.state.hasFocus ? style["input-focus"] : style["input-nonFocus"]}` }>
                { addBefore ? <div className={ style["input-before"] }>{ addBefore }</div> : null}
                <div className={ style["input-bar"] }>
                    <input type="text" maxLength="50" autoComplete="false" placeholder="fsf"  onFocus={ this.focusSearchInput.bind(this, true) } onBlur={ this.focusSearchInput.bind(this, false) }/>
                </div>
                { addAfter ? <div className={ style["input-after"] }>{ addAfter }</div> : null }
            </div>
        )
    }
}
export default Input;