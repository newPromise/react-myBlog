import React, { Component } from 'react';
import style from './DatePicker.less';
import dateUtil from '../../common/js/date.js'

class DatePicker extends Component {
  constructor (props) {
    super(props);
    this.selectDate = this.selectDate.bind(this);
    this.initDateDatas = this.initDateDatas.bind(this);
    this.state = {
      date: '',
      activeIndex: '',
      dateDatas: [],
      dateYear: '',
      dateMonth: '',
      dateDay: '',
      weekDay: '',
      monthDays: ''
    };
  }
  selectDate (tdIndex, cellDisabled) {
    if (cellDisabled) {
      return;
    }
    const addSuffix = (val) => val < 10 ? `0${val}` : val;
    this.setState({ activeIndex: tdIndex });
    this.props.onChange(`${this.state.dateYear}-${addSuffix(this.state.dateMonth)}-${addSuffix(this.state.dateDatas[tdIndex])}`);
  }
  toggleMon (toggleTag) {
    this.initDateDatas(dateUtil(this.state.date).getAfterMon((toggleTag === 'last' ? -1 : 1)).$date);
    this.setState({ activeIndex: '' });
  }
  componentDidMount () {
    this.initDateDatas(this.props.date);
  }
  initDateDatas (date) {
    const dateDatas = new Array(42);
    const dateDay = dateUtil(date).date();
    const year = dateUtil(date).year();
    const month = dateUtil(date).month();
    let weekDay = dateUtil(date).weekDay();
    if (weekDay === 0) {
      weekDay = 7;
    }
    const monthDayNum = dateUtil(date).getDays();
    const lastMonthDays = dateUtil(date).getAfterMon(-1)
      .getDays();
    for (let dayIndex = 0; dayIndex < dateDatas.length; dayIndex++) {
      if (dayIndex + 1 >= weekDay && ((dayIndex + 1) < (monthDayNum + weekDay))) {
        dateDatas[dayIndex] = dayIndex + 2 - weekDay;
      }
      if (dayIndex + 1 < weekDay) {
        dateDatas[dayIndex] = lastMonthDays - weekDay + 2 + dayIndex;
      }
      if (((dayIndex + 1) >= (monthDayNum + weekDay))) {
        dateDatas[dayIndex] = dayIndex - monthDayNum - weekDay + 2;
      }
    }
    this.setState({ dateDatas, dateYear: year, date, dateMonth: month, dateDay, weekDay, monthDays: monthDayNum });
  }
  render () {
    const DateHeader = () => (
      <div className={style['blog-date-header']}>
        <div className={style['blog-header-inner']}>
          <a className={style['date-pev-btn']} onClick={this.toggleMon.bind(this, 'last')}>上一月</a>
          <span className={style['header-date-text']}>{`${this.state.dateYear}年${this.state.dateMonth}月`}</span>
          <a className={style['date-next-btn']} onClick={this.toggleMon.bind(this, 'next')}>下一月</a>
        </div>
      </div>
    );
    const DateBody = () => {
      let theader = [];
      let tbodyer = [];
      let tdIndex = 0;
      const TABLE_ROW = 6;
      const TABLE_COL = 7;
      const weeks = ['一', '二', '三', '四', '五', '六', '日'];
      const allDateDays = [];
      theader = weeks.reduce((pev, cur, index) => pev.push(<th  key={index}>{cur}</th>) && pev, []);
      for (let rowIndex = 0; rowIndex < TABLE_ROW; rowIndex++) {
        let colEl = null;
        const tdEls = [];
        for (let colIndex = 0; colIndex < TABLE_COL; colIndex++) {
          const cellDisabled = tdIndex < this.state.weekDay - 1 || tdIndex + 1 >= this.state.monthDays + this.state.weekDay;
          tdEls.push(<td align="center" valign="middle" onClick={this.selectDate.bind(this, tdIndex, cellDisabled)}  key={colIndex}>
            <div className={cellDisabled ? style['blog-date-disabledCell'] : (this.state.activeIndex === tdIndex ? style['blog-date-active-dayCell'] : style['blog-date-dayCell'])}>
              {this.state.dateDatas[tdIndex]}</div>
          </td>);
          tdIndex++;
        }
        colEl = <tr key={rowIndex}>{tdEls}</tr>;
        tbodyer.push(colEl);
      }
      const Table = () => (
        <div>
          <table>
            <thead>
              <tr>
                {theader}
              </tr>
            </thead>
            <tbody>
              {tbodyer}
            </tbody>
          </table>
        </div>
      );
      return (
        <div className={style['blog-date-body']}>
          <Table/>
        </div>
      )
    };
    return (
      <div className={style['blog-date-wrapper']}>
        <div className="blog-date-content">
          <DateHeader/>
          <DateBody/>
        </div>
      </div>
    );
  }
}

export default DatePicker;
