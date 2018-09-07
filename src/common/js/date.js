const REGEX_DATE = /^(\d{4})[\/ | -]?(\d{1,2})[\/ | -]?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/;
// const REGEX_DATE_TWO = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/;

const dateParse = (date) => {
    if (date === null) return new Date(NaN);
    if (date === void 0) return new Date();
    if (date instanceof Date) return date;
    if (typeof date === "string") {
        // 匹配两种格式 "2018-09-01" or "2018/09/01"
        let reg = date.match(REGEX_DATE);
        if (reg) {
            return new Date(reg[1], reg[2] - 1, reg[3], reg[5] || 0, reg[6] || 0, reg[7] || 0);
        }
    }
}


class dateCl {
    constructor(date) {
        this.parse(date);
    }
    parse(date) {
        this.date = dateParse(date);
        this.init();
    }
    init() {
        this.Y = this.date.getFullYear();
        this.M = this.date.getMonth();
        this.D = this.date.getDate();
        this.W = this.date.getDay();
        this.h = this.date.getHours();
        this.m = this.date.getMinutes();
        this.s = this.date.getSeconds();
    }
}

let date = function (d) {
    return new dateCl(d);
}

export default date;