import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import CalendarHeader from '../calendar/CalendarHeader';
import DateTable from '../date/DateTable';
import DateInput from '../date/DateInput';
import { getTimeConfig } from '../util/index';

const CalendarPart = createReactClass({
  propTypes: {
    prefixCls: PropTypes.string,
    value: PropTypes.any,
    hoverValue: PropTypes.any,
    selectedValue: PropTypes.any,
    direction: PropTypes.any,
    locale: PropTypes.any,
    showTimePicker: PropTypes.bool,
    format: PropTypes.any,
    placeholder: PropTypes.any,
    disabledDate: PropTypes.any,
    timePicker: PropTypes.any,
    disabledTime: PropTypes.any,
    onInputSelect: PropTypes.func,
    timePickerDisabledTime: PropTypes.object,
    enableNext: PropTypes.any,
    enablePrev: PropTypes.any,
  },
  render() {
    const props = this.props;
    const {
      prefixCls,
      value,
      hoverValue,
      selectedValue,
      direction,
      locale, format, placeholder,
      disabledDate, timePicker, disabledTime,
      timePickerDisabledTime, showTimePicker,
      onInputSelect, enablePrev, enableNext,
    } = props;
    const shouldShowTimePicker = showTimePicker && timePicker;
    const disabledTimeConfig = shouldShowTimePicker && disabledTime ?
      getTimeConfig(selectedValue, disabledTime) : null;
    const rangeClassName = `${prefixCls}-range`;
    const newProps = {
      locale,
      value,
      prefixCls,
      showTimePicker,
    };
    const index = direction === 'left' ? 0 : 1;
    const timePickerEle = shouldShowTimePicker &&
      React.cloneElement(timePicker, {
        showHour: true,
        showMinute: true,
        showSecond: true,
        ...timePicker.props,
        ...disabledTimeConfig,
        ...timePickerDisabledTime,
        onChange: onInputSelect,
        defaultOpenValue: value,
        value: selectedValue[index],
      });

    return (
      <div className={`${rangeClassName}-part ${rangeClassName}-${direction}`}>
       <div  className={`kn-div`}>
          <div className={`kn-cancel`}  onClick={props.cancelPanel}>
          取消
          </div>
          <div onClick={props.okPanel} className={`kn-ok`}>
          确定
          </div>
        </div>
        <div className={`kn-header`}>
        <div style={{"display":'inline-block',"height":"30px","width":"375px","marginTop":'5px'}}>
           <div onClick={props.clickInToday} className={`rc-kn-btn`}> 今天 </div>
           <div onClick={props.clickInYesterday} className={`rc-kn-btn`}> 昨天 </div>
           <div onClick={props.clickInWeek} className={`rc-kn-btn`}> 最近7天 </div>
           <div onClick={props.clickInMonth} className={`rc-kn-btn`}> 最近30天 </div>
           </div>
        </div>
        
        <DateInput
          format={format}
          locale={locale}
          prefixCls={prefixCls}
          timePicker={timePicker}
          disabledDate={disabledDate}
          placeholder={placeholder}
          disabledTime={disabledTime}
          value={value}
          showClear={false}
          selectedValue={selectedValue[index]}
          onChange={onInputSelect}
        />
       
        <div style={{ outline: 'none' }}>
          <CalendarHeader
            {...newProps}
            enableNext={enableNext}
            enablePrev={enablePrev}
            onValueChange={props.onValueChange}
            onPanelChange={props.onPanelChange}
            disabledMonth={props.disabledMonth}
          />
          {showTimePicker ? <div className={`${prefixCls}-time-picker`}>
            <div className={`${prefixCls}-time-picker-panel`}>
              {timePickerEle}
            </div>
          </div> : null}
          <div className={`${prefixCls}-body`}>
            <DateTable
              {...newProps}
              hoverValue={hoverValue}
              selectedValue={selectedValue}
              dateRender={props.dateRender}
              onSelect={props.onSelect}
              onDayHover={props.onDayHover}
              disabledDate={disabledDate}
              showWeekNumber={props.showWeekNumber}
            />
          </div>
        </div>
      </div>);
  },
});

export default CalendarPart;
