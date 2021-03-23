// 标签排行
import React, { Component } from 'react';
import style from './tagRank.less';
import Tag from '..//../components/Tag/Tag';

class TagRank extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const rankTags = (tagItems) => {
      if (Array.isArray(tagItems)) {
        return tagItems.map((tag, i) => {
          const { title } = tag;
          return <div key={i} className={style['tag-rank-tags']}><Tag children={title}/></div>
        });
      }
    };
    const testTags = [{ title: '你法第三季度发送好' }, { title: '你f范德萨发生分散好' }, { title: '你地方撒范德萨发范德萨发范德萨好' }, { title: '你好' }];
    return (
      <div className={style['tag-rank-content']}>
        {rankTags(testTags)}
      </div>
    );
  }
}

export default TagRank;
