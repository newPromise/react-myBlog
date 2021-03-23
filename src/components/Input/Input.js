import React, { Component } from 'react';
import style from './Input.less';
import * as PropTypes from 'prop-types';

class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasFocus: false,
      inputValue: ''
    };
  };
  focusSearchInput (isFocus) {
    this.setState({
      hasFocus: isFocus
    });
  }
    static propTypes = {
      addBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      addAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      type: PropTypes.oneOf(['text', 'search']),
      placeholder: PropTypes.string,
      width: PropTypes.string
    }
    static defaultProps = {
      addAfter: null,
      addBefore: null,
      type: 'text',
      placeholder: '',
      width: '400px'
    }
    render () {
      const { addBefore, addAfter, placeholder, type, width, whenChange, value } = this.props;
      return (
        <div className={`${style['input-wrapper']} ${this.state.hasFocus ? style['input-focus'] : style['input-nonFocus']}`} style={{ width }}>
          {addBefore ? <div className={style['input-before']}>{addBefore}</div> : null}
          <div className={`${style['input-bar']} ${addBefore && style['input-hasBefore']} ${addAfter && style['input-hasAfter']}`}>
            <input
              ref="input"
              type="text"
              maxLength="50"
              autoComplete="false"
              placeholder={placeholder}
              onChange={() => {whenChange(this.refs.input.value)}}
              onFocus={this.focusSearchInput.bind(this, true)}
              onBlur={this.focusSearchInput.bind(this, false)}/>
          </div>
          {addAfter ? <div className={`${style['input-after']} ${(type === 'search' ? style['input-search'] : '')}`}>{addAfter}</div> : null}
        </div>
      )
    }
}
export default Input;
