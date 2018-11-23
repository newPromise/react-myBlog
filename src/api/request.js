// 放置所有的请求函数

import sendRequest from "./api.config";
import api from "./api.js";
const testRes = async (params, data) => {
    try {
        await sendRequest({method: "post", url: "sfd", data}, (res) => {
            console.log("res", res);
        })
    } catch (error) {
        console.log("error", error);
    }
   
};

export { testRes };