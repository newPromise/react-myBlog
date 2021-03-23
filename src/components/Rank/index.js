// 文章排行
import React, { Component } from 'react';
import style from './index.less';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';


class ArticleRank extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { rankItems } = this.props;
    const Items = (rankItems) => rankItems.map((item, index) => {
      const { title, url } = item;
      const itemTitle = <Link to={url} className={style['article-rank-link']}><span className={style['article-rank-title']}>{title}</span></Link>;
      const itemIndex = <span className={style['article-rank-index']}>{index + 1}</span>;
      return <Item text={itemTitle} key={index} prefix={itemIndex}/>
    });
    return (
      <div className={style['article-rank-content']}>
        <div className={style['article-rank-head']}>文章排行</div>
        {Items(rankItems)}
      </div>
    )
  }
}

export default ArticleRank;
