import React, { Component } from 'react';
import style from './aside.less';
import composeCls from '../../common/js/classnames';
import DatePicker from '../../components/DatePicker/DatePicker';
import ArticleRank from '../../components/Rank';
import TagRank from './tagRank';

class Aside extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rankItems: [{ title: 'nihao', url: 'http://localhost:8882/article/1234' }, { title: '第二条', url: '' }]
    };
  }
  render () {
    const articleRankClass = composeCls(style['home-aside-articlerank'], 'blog-global-card');
    const datePickerClass = composeCls(style['home-aside-datePicker'], 'blog-global-card');
    const tagRankClass = composeCls(style['home-aside-tagrank'], 'blog-global-card');
    return (
      <div className={style['home-aside-container']}>
        <div className={articleRankClass}>
          <ArticleRank rankItems={this.state.rankItems}></ArticleRank>
        </div>
        <div className={datePickerClass}>
          <DatePicker></DatePicker>
        </div>
        <div className={tagRankClass}>
          <TagRank></TagRank>
        </div>
      </div>
    )
  }
}

export default Aside;
