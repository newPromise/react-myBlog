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
        this.$date = dateParse(date);
        this.init();
    }
    init() {
        this.$Y = this.$date.getFullYear();
        this.$M = this.$date.getMonth();
        this.$D = this.$date.getDate();
        this.$W = this.$date.getDay();
        this.$h = this.$date.getHours();
        this.$m = this.$date.getMinutes();
        this.$s = this.$date.getSeconds();
    }
    year() {
        return this.$Y;
    }
    month() {
        return this.$M + 1;
    }
    // return day in week
    weekDay() {
        return this.$W;
    }
    // return day in month
    date() {
        return this.$D;
    }
    // get this month day nums
    getDays() {
        return new Date(this.$Y, this.$M + 1, 0).getDate();
    }
    /**
     * @description getAfterMon 获取到离当前月几月的日期
     * @param {Number} monDis 距离的月份数 -num: 之前的日期 num 之后的日期
     */
    getAfterMon(monDis) {
        if (typeof monDis !== "number" || isNaN(monDis)) return; 
        let newMon = this.$M + monDis + 1;
        let newYear = this.$Y;
        if (newMon <= 0) {
            newMon = 12 + newMon;
            newYear = this.$Y - 1;
        }
        if (newMon > 12) {
            newMon = newMon - 12;
            newYear = this.$Y + 1;;
        }
        const newDate = new Date(newYear, newMon - 1, this.$D, this.$h, this.$m, this.$s);
        return new dateCl(newDate);
    }
    hour() {
        return this.$h
    }
    minute() {
        return this.$m
    }
    second() {
        return this.$s
    }
}

let date = function (d, monthIndex) {
    return new dateCl(d, monthIndex);
}

export default date;