import React, { Component } from 'react';
import style from './Popper.less';
import * as PropTypes from 'prop-types';
import BasePopper from 'popper.js';

class Popper extends Component {
  constructor (props) {
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
      offset: '0px, 40px'
    }
    togglePopperShow (visiable) {
      this.setState({ showPopper: visiable });
    }
    componentDidUpdate () {
      new BasePopper(this.refs.referEl, this.refs.popper, {
        placement: 'bottom-start',
        modifiers: {
          offset: {
            offset: this.props.offset
          }
        }
      });
    }
    render () {
      const { children, content, visiable } = this.props;
      return (
        <div className={style['blog-popper']}>
          <span ref="referEl" className={style['blog-popper-referel']} >{children}</span>
          <div ref="popper"
            style={{ display: (visiable || this.state.showPopper) ? 'block' : 'none' }}
            className={style['blog-popper-content']}
            onMouseEnter={this.togglePopperShow.bind(this, true)}
            onMouseLeave={this.togglePopperShow.bind(this, false)}>
            {content}
          </div>
        </div>
      );
    }
}

export default Popper;
