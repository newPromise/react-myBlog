import React, { Component } from 'react';
import style from './Card.less';
import * as PropTypes from 'prop-types';


class Card extends Component {
  constructor (props) {
    super(props);
  }
    static propTypes = {
      articleResource: PropTypes.string,
      description: PropTypes.string,
      articleVoterCount: PropTypes.string,
      articleTime: PropTypes.string,
      articleTitle: PropTypes.string
    }
    static defaultProps = {
      articleResource: '',
      description: '',
      articleVoterCount: '',
      articleTime: '',
      articleTitle: ''
    }
    render () {
      const { articleResource, description, articleVoterCount, articleTitle, articleTime } = this.props;
      return (
        <div className={style['blog-card-wrapper']}>
          <div className={style['blog-card-content']}>
            {/* <div className={style['blog-article-resource']}>内容来自于 {articleResource}</div> */}
            <div className={style['blog-article']}>
              <div className={style['blog-article-title']}>{articleTitle}</div>
              {/* <div className={style['blog-like-count']}>{articleVoterCount} 人喜欢这篇文章</div> */}
              {/* use dangeroutslySetInnerHtML to set innerHTML */}
              <div className={style['blog-article-description']} dangerouslySetInnerHTML={{ __html: description }}></div>
              <div className={style['article-publish-time']}>发布于 {articleTime}</div>
            </div>

          </div>
        </div>
      )
    }
}

export default Card;
