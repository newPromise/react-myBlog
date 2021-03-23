import React, { Component } from 'react';
import style from './Header.less';
import Input from '../Input/Input.js';
import Icon from '../Icon/Icon.js';
import Search from '../Input/InputSearch';
import composeCls from '../../common/js/classnames';
import { on, throttle } from '../../common/js/util';
// eslint-disable-next-line

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = { scrollDeriction: '' };
    this.whenSearch = this.whenSearch.bind(this);
  }
  whenSearch (val) {
    console.log('val', val);
  }
  componentDidMount () {
    const throttleFn = throttle(4000, () => {
      console.log('函数节流');
    });
    on(document, 'scroll', throttleFn)
    let lastScrollTop = 0;
    on(document, 'scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      this.setState({ scrollDeriction: (top - lastScrollTop) < 0 ? 'top' : 'bottom' });
      lastScrollTop = top;
    });
  }
  render () {
    const mainHeaderCls = composeCls(style['header-main-inner'], this.state.scrollDeriction === 'bottom' ? style['header-main-bar'] : '');
    const secondHeaderCls = composeCls(style['header-second-inner'], this.state.scrollDeriction === 'bottom' ? style['header-second-bar'] : '');
    return (
      <header className={style['blog-header']}>
        <div className={style['header-wrapper']}>
          <div className={mainHeaderCls}>
            <a className={style['header-logo']}></a>
            <nav className={style['header-nav']}>
              <a className={style['header-articles-link']}>首页</a>
              <a className={style['header-tags-link']}>归档</a>
              <a className={style['header-all-link']}>关于</a>
            </nav>
            <Search type="search" addAfter={<Icon type="like"/>} onSearch={this.whenSearch}/>
          </div>
          <div className={secondHeaderCls}>
            <div className={style['header-left']}>
              <a className={style['header-logo']}></a>
              <nav className={style['header-nav']}>
                <a className={style['header-articles-link']}>分类</a>
                <a className={style['header-tags-link']}>标签</a>
                <a className={style['header-all-link']}>其他</a>
              </nav>
            </div>
            <div className={style['header-right']}>
              <Search type="search" width="296px" addAfter={<Icon type="like"/>}/>
            </div>
          </div>
        </div>
      </header>)
  }
}

export default Header;
