import React , { Component } from "react";
import style from "./Card.less";
import * as PropTypes from 'prop-types';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        articleResource: PropTypes.string,
        articleContent: PropTypes.string,
        articleVoterCount: PropTypes.string,
        articleTime: PropTypes.string,
        articleTitle: PropTypes.string
    }
    static defaultProps = {
        articleResource: "",
        articleContent: "",
        articleVoterCount: "",
        articleTime: "",
        articleTitle: ""
    }
    render() {
        const { articleResource, articleContent, articleVoterCount, articleTitle, articleTime } = this.props;
        return (
            <div className= { style["blog-card-wrapper"] }>
                <div className= { style["blog-card-content"] }>
                    <div className={ style["blog-article-resource"] }>热门内容来自 { articleResource }</div>
                    <div className= { style["blog-article"] }>
                        <div className={ style["blog-article-title"] }>{ articleTitle }</div>
                        <div className={ style["blog-like-count"] }>{ articleVoterCount } 人觉得很赞</div>
                        {/* use dangeroutslySetInnerHtML to set innerHTML */}
                        <div className={ style["blog-article-content"] } dangerouslySetInnerHTML={{ __html: articleContent }}></div>
                        <div className={ style["article-publish-time"] }>发布于 { articleTime }</div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Card;