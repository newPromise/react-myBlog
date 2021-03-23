import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import style from  './index.less';
import Content from './content';
import Aside from './aside';

class HomePage extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className={style['blog-home']}>
        <div className={style['blog-home-header']}>
          <Header/>
        </div>
        <div className={style['blog-empty-holder']}></div>
        <div className={style['blog-home-main']}>
          <div className={`${style['blog-home-content']}`}>
            <Content/>
          </div>
          <div className={style['blog-home-aside']}>
            <Aside/>
          </div>
        </div>
      </div>)
  }
};
export default HomePage;
