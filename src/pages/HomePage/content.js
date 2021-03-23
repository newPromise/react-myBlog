import React, { Component } from 'react';
import style from './content.less';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import Seize from '../../components/Seize';
import { http } from '../../api/request';
class Content extends Component {
  constructor (props) {
    super(props);
    this.state = { imgSrc: 'df', list: [] };
  }
  getList () {
    http({ method: 'get', url: '/article/list', params: { pageSize: 10, pageNo: 1 } }).then((res) => {
      this.setState({
        list: res.data
      })
    })
  }
  componentWillMount () {
    this.getList()
  }
  render () {
    const postItems = (articles) => articles.map((arc, index) => {
      const {
        id,
        title: articleTitle,
        articleResource,
        content: articleContent,
        articleVoterCount,
        articleTime } = arc;
      return <Link key={index} to={'/article/' + id}>
        <Card articleTitle={articleTitle} articleContent={articleContent} articleResource={articleResource} articleVoterCount={articleVoterCount} articleTime={articleTime}/>
      </Link>
    });
    return (
      <div className={style['content-wrapper']}>
        <div className={style['content-all-articles']}>{this.state.list.length > 0 ? postItems(this.state.list) : <div className={style['content-empty-articles']}>空无一物</div>}</div>
      </div>
    )
  }
}

export default Content;
