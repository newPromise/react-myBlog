import React, { Component } from 'react';
import style from './index.less';
import composeCls from '../../common/js/classnames';
import Button from '../../components/Button/Button';
import Tag from '../../components/Tag/Tag';
import Brief from '../../components/Brief/Brief';
import { http } from '../../api/request';

class Article extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expand: false,
      articleTitle: '',
      content: ''
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }
  toggleExpand () {
    this.setState({ expand: !this.state.expand });
  }
  getDetail () {
    http({ method: 'get', url: '/article/detail', params: { id: this.props.match.params.id } }).then((res) => {
      this.setState({
        content: res.data.content
      })
    })
  }
  componentDidMount () {
  }
  componentWillMount () {
    this.getDetail()
  }
  render () {
    const { expand, articleTitle } = this.state;
    return (
      <div className={style['blog-article-wrapper']} style={{ paddingRight: `${expand ? '320px' : '0'}` }}>
        <div className={style['blog-article']}>
          <div className={style['blog-article-topbar']} style={{ paddingRight: `${expand ? '320px' : '0'}` }}>
            <div className={style['topbar-content']}>
              <div className={style['topbar-left']}>收藏于</div>
              <div className={style['topbar-text']}>{articleTitle}</div>
              <div className={style['topbar-right']}><Button type="primary" size="default" text="全部文章"/></div>
            </div>
          </div>
          {/* <img className={ style["blog-article-img"] } src="https://pic2.zhimg.com/80/v2-f380cb023c706812fb34b52d6c3d1b1a_r.jpg"/> */}
          <div className={style['blog-article-container']}>
            <div >
              <h1 className={style['blog-article-title']}>我是文章标题</h1>
              <div className={style['blog-article-detail']}>
                <span>发表于</span>
                <span>分类于</span>
                <span>发表于</span>
              </div>
            </div>
            <div className={[style['blog-article-content'], style['blog-text']].join(' ')} dangerouslySetInnerHTML={{ __html: this.state.content }}>
            </div>
            <div className={style['article-tags']}>
              <Brief briefConObj={{ avatar_url: '', brief_text: '',  brief_title: '',  question_count: '1'}} children={<Tag children="dfd"/>}/>
            </div>
            <div className={style['blog-article-bot']}>
              <span>喜欢</span>
            </div>
          </div>
        </div>
        <div className={style['blog-article-sidebar']} style={{ right: `${expand ? '0' : '-320px'}` }}>
          <div className={style['menu-btn']} onClick={this.toggleExpand}>{expand ? '关闭' : '开启'}</div>
        </div>
      </div>
    );
  }
};

export default Article;
