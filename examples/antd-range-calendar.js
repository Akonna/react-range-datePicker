/* eslint react/no-multi-comp:0, no-console:0 */

import 'react-date-dpr/assets/index.less';
import RangeCalendar from 'react-date-dpr/src/RangeCalendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'react-date-dpr/src/Picker';

import 'rc-time-picker/assets/index.css';

import zhCN from 'react-date-dpr/src/locale/zh_CN';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';

const formatStr = 'YYYY-MM-DD';


const now = moment();


const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = (
  <TimePickerPanel
    defaultValue={[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}
  />
);

function newArray(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date);  // can not select days before today
}

function disabledTime(time, type) {
  console.log('disabledTime', time, type);
  if (type === 'start') {
    return {
      disabledHours() {
        const hours = newArray(0, 60);
        hours.splice(20, 4);
        return hours;
      },
      disabledMinutes(h) {
        if (h === 20) {
          return newArray(0, 31);
        } else if (h === 23) {
          return newArray(30, 60);
        }
        return [];
      },
      disabledSeconds() {
        return [55, 56];
      },
    };
  }
  return {
    disabledHours() {
      const hours = newArray(0, 60);
      hours.splice(2, 6);
      return hours;
    },
    disabledMinutes(h) {
      if (h === 20) {
        return newArray(0, 31);
      } else if (h === 23) {
        return newArray(30, 60);
      }
      return [];
    },
    disabledSeconds() {
      return [55, 56];
    },
  };
}

function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

function onStandaloneChange(value) {
  console.log('onChange');
  console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
  console.log('onSelect');
  console.log(format(value[0]), format(value[1]));
}

const Test = React.createClass({
  getInitialState() {
    return {
      value: [],
      hoverValue: [],
    };
  },

  onChange(value) {
    console.log('onChange', value);
    this.setState({ value });
  },

  onHoverChange(hoverValue) {
    this.setState({ hoverValue });
  },

  render() {
    const state = this.state;
    console.log(now);
    const calendar = (
      <RangeCalendar
        hoverValue={state.hoverValue}
        showWeekNumber={false}
        showOk={false}
        showClear={false}
        showToday={false}
        dateInputPlaceholder={[]}
        defaultValue={[]}
        locale={zhCN}
      />
    );
    return (
      <Picker
        value={state.value}
        onChange={this.onChange}
        calendar={calendar}
      >
        {
          ({ value }) => {
            return (<span>
                <input
                  placeholder="今日"
                  style={{ width: 350,border:'1px solid red' }}
                  disabled={state.disabled}
                  readOnly
                  className="ant-calendar-picker-input ant-input"
                  value={isValidRange(value) && `${format(value[0])} ~ ${format(value[1])}` || ''}
                />
                </span>);
          }
        }
      </Picker>);
  },
});

ReactDOM.render(
  <div>
    <div style={{ margin: 20 }}>
   
     
    </div>
     <div style={{ width:100,fontSize:24}}  className="kn">
    fkdjfkdjfkdjfkdfjkdjfkdjfkdjfkdjfkdjfkdjkfjdkfjdkfjkdkfjkdjfkdjfkdjfjjjfkdjfkdjfkdjfkdjfkdjfkdjfkdfjkdjfkdjfkdjfkdjfkdjfkdjkfjdkfjdkfjkdjfkdjfkdjfkdjfkdjkfd
      </div>
         <Test />
          fkdjfkdjfkdjfkdfjkdj fkdjfkdjfkdjfkdfjkdj fkdjfkdjfkdjfkdfjkdj
  </div>, document.getElementById('__react-content'));
