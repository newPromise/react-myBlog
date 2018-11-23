import React, { Component } from 'react';
import style from "./content.less";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Seize from "../../components/Seize";
import { testRes } from "../../api/request";
class Content extends Component {
    constructor (props) {
        super(props);
        this.state = { imgSrc: "df" };
        console.log("url", window.URL.createObjectURL(new Blob([{ name: "张宁宁" }], { type: "text/plain" })));
    }
    uploadFile(file) {
        console.log("上传文件", file.target.files[0]);
        const files = file.target.files[0];
        console.log("files", files);
        // 使用 formData 需要注意， 这个时候不需要进行 JSON.parse
        const formData = new FormData();
        formData.append("file", files);
        console.log("formData", formData.get("file"));
        var downloadElement = document.createElement('a');
            downloadElement.href =  window.URL.createObjectURL(new Blob([formData.get("file")], { type: "text/plain" }));
            // downloadElement.href = reader.result;
            // that.setState({ imgSrc: downloadElement.href });
            console.log("得到下载的文件", downloadElement.href);
            downloadElement.download = "测试.txt"; 
            document.body.appendChild(downloadElement);
    　　    downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement);
        testRes({}, formData);
    }
    readFile(file) {
        let that = this;
        console.log("文件", file.target.files[0]);
        const reader = new FileReader();
        const aReader = new FileReader();
        // 使用 gbk 对于汉字进行编码工作
        reader.readAsText(file.target.files[0], "gbk");
        // 作为 arrayBuffer 输出
        // reader.readAsDataURL(file.target.files[0]);
        // reader.onload = function (result) {
            console.log("result", reader.result);
            console.log("state", reader.readyState);
            console.log("thishtis", this);
            var downloadElement = document.createElement('a');
            // downloadElement.href =  window.URL.createObjectURL(new Blob([reader.result], { type: "text/plain" }));
            downloadElement.href = window.URL.createObjectURL(file.target.files[0]);
            // downloadElement.href = reader.result;
            // that.setState({ imgSrc: downloadElement.href });
            console.log("得到下载的文件", downloadElement.href);
            downloadElement.download = "测试.txt"; 
            document.body.appendChild(downloadElement);
    　　    downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement);
        // };
        // window.URL.createObjectURL(new Blob([aReader.readAsArrayBuffer(file.target.files[0])], { type: "Files" }));
    }
    render() {
        const allItems = (articles) => {
            return articles.map((arc, index) => {
                const { 
                    articleTitle,
                    articleResource,
                    articleContent,
                    articleVoterCount,
                    articleTime } = arc;
                return <Link key={ index } to="/article/1234"><Card articleTitle={ articleTitle } articleContent={ articleContent } articleResource={ articleResource } articleVoterCount= { articleVoterCount } articleTime={ articleTime }/></Link>
            });
        };
        let mockArticles = [{ articleTitle: "我是文章标题", articleContent: "我是博客文章内容啦啦啦啦", articleResource: "js",articleVoterCount: "5", articleTime: "2019-21-32" },
            { articleTitle: "我是文章标题", articleContent: "我是博客文章内容啦啦啦啦", articleResource: "js",articleVoterCount: "5", articleTime: "2019-21-32" }
        ];
        // mockArticles = [];
        return (
            <div className={ style["content-wrapper"] }>
                <Seize/>
                {/* <div className={ style["article-time"] }>
                    <div className={ style["article-search-masker"] }></div>
                    <div className={ style["article-search-time"] }>文章</div>
                </div> */}
                <a download="fd.jpg" href="fd.jpg">我是链接</a>
                <input type="file" onChange={ this.uploadFile.bind(this) }/>
                <img alt="我是预览的图片" src={ this.state.imgSrc }/>
                <div className={ style["content-all-articles"] }>{ mockArticles.length > 1 ? allItems(mockArticles) : <div className={ style["content-empty-articles"] }>空无一物</div> }</div>
            </div>
        )
    }
}

export default Content;