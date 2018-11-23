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
                    <div className={ style["blog-article-resource"] }>内容来自于 { articleResource }</div>
                    <div className= { style["blog-article"] }>
                        <div className={ style["blog-article-title"] }>{ articleTitle }</div>
                        <div className={ style["blog-like-count"] }>{ articleVoterCount } 人喜欢这篇文章</div>
                        {/* use dangeroutslySetInnerHtML to set innerHTML */}
                        <div className={ style["blog-article-content"] }>
                            <div className={ style["blog-article-preImg"] }><img src="https://pic2.zhimg.com/80/v2-f380cb023c706812fb34b52d6c3d1b1a_r.jpg" alt="cover"/></div>
                            <div className={ style["blog-article-description"] } dangerouslySetInnerHTML={{ __html: articleContent }}></div>
                        </div>
                        <div className={ style["article-publish-time"] }>发布于 { articleTime }</div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Card;