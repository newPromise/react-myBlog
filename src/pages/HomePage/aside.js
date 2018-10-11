import React, { Component } from 'react';
import style from "./aside.less";
import composeCls from "../../common/js/classnames";
import DatePicker from '../../components/DatePicker/DatePicker';
import ArticleRank from "./articleRank";
import TagRank from "./tagRank";

class Aside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const articleRankClass = composeCls(style["home-aside-articlerank"], "blog-global-card");
        const datePickerClass = composeCls(style["home-aside-datePicker"], "blog-global-card");
        const tagRankClass = composeCls(style["home-aside-tagrank"], "blog-global-card");
        return (
            <div className={ style["home-aside-container"] }>
                <div className={ articleRankClass }>
                    <ArticleRank></ArticleRank>
                </div>
                <div className={ datePickerClass }>
                    <DatePicker></DatePicker>
                </div>
                <div className={ tagRankClass }>
                    <TagRank></TagRank>
                </div>
            </div>
        )
    }
}

export default Aside;