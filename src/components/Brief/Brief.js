import React, { Component } from 'react';
import style from './Brief.less';
import Popper from '../Popper/Popper';

class Brief extends Component {
  constructor (props) {
    super(props);
    this.state = {
      popperVisiable: false
    };
    this.togglePopperShow = this.togglePopperShow.bind(this);
  }
  togglePopperShow (showPopper) {
    setTimeout(() => {
      this.setState({ popperVisiable: showPopper });
    }, 500);
  }
  render () {
    const { children, briefConObj } = this.props;
    const { popperVisiable } = this.state;
    const briefContent = (briefConObj) => {
      // 获取到简介的参数
      // 头像图片地址， 简介文字， 简介名称 问题个数
      const { avatar_url, brief_text, brief_title, question_count } = briefConObj;
      const AvatarImg = () => <img className={style['blog-brief-avatar']} src="https://pic4.zhimg.com/v2-aa75dbfc6e01799538ebc49ab3503063_im.jpg" alt="" width="72" height="72"/>;
      const Title = () => <div className={style['blog-brief-title']}><h4>{brief_title}</h4></div>;
      const Text = () => <div className={style['blog-brief-text']}>{brief_text} </div>;
      const Bottom = () => (
        <div className={style['blog-brief-bottom']}>
          <div className={style['blog-brief-questionCount']}>
            <div>所有文章</div>
            <div className={style['question-count']}>{question_count}</div>
          </div>
        </div>);
      return (
        <div className={style['blog-brief-wrapper']}>
          <div className={style['blog-brief-content']}>
            <div className={style['blog-brief-top']}>
              <AvatarImg/>
              <Title/>
            </div>
            <Text/>
            <Bottom/>
          </div>
        </div>
      );
    };
    return (
      <Popper content={briefContent(briefConObj)} visiable={popperVisiable}>
        <div className={style['blog-brief-popper']} onMouseEnter={this.togglePopperShow.bind(this, true)} onMouseLeave={this.togglePopperShow.bind(this, false)}>
          {children}
        </div>
      </Popper>
    )
  }
}

export default Brief;
