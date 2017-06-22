
React Calendar DataPicker12






[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/konna/react-date-dpr.svg?style=flat-square
[travis-url]: https://travis-ci.org/konna/react-date-dpr
[npm-image]: https://img.shields.io/npm/v/react-date-dpr.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-date-dpr 
[coveralls-image]: https://coveralls.io/repos/github/konna/react-date-dpr/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/konna/react-date-dpr?branch=master
[download-image]: https://img.shields.io/npm/dm/react-date-dpr.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-date-dpr

## install

[![rc-calendar](https://nodei.co/npm/react-date-dpr.png)](https://npmjs.org/package/react-date-dpr)

## Usage

React Range DataPicker

npm install react-date-dpr

## Development

```
npm install
npm start
```

## Example

http://localhost:8002/examples/antd-range-calendar.html


## API


### rc-calendar/lib/RangeCalendar props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td></td>
          <td>prefixCls of this component</td>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>additional style of root dom node</td>
        </tr>
        <tr>
          <td>renderSidebar</td>
          <td>() => React.Node</td>
          <td></td>
          <td>side bar</td>
        </tr>
        <tr>
          <td>renderFooter</td>
          <td>() => React.Node</td>
          <td></td>
          <td>extra footer</td>
        </tr>
        <tr>
          <td>selectedValue</td>
          <td>moment[]</td>
          <td></td>
          <td>current selected value range. with two elements.</td>
        </tr>
        <tr>
          <td>defaultSelectedValue</td>
          <td>moment[]</td>
          <td></td>
          <td>default selected value range</td>
        </tr>
        <tr>
          <td>locale</td>
          <td>Object</td>
          <td>import from 'rc-calendar/lib/locale/en_US'</td>
          <td>calendar locale</td>
        </tr>
        <tr>
          <td>format</td>
          <td>String</td>
          <td>depends on whether you set timePicker and your locale</td>
          <td>use to format/parse date(without time) value to/from input</td>
        </tr>
        <tr>
          <td>disabledDate</td>
          <td>Function(current:moment):Boolean</td>
          <td></td>
          <td>whether to disable select of current date</td>
        </tr>
        <tr>
          <td>showWeekNumber</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether to show week number of year</td>
        </tr>
        <tr>
          <td>showToday</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether to show today button</td>
        </tr>
        <tr>
          <td>showOk</td>
          <td>Boolean</td>
          <td>auto</td>
          <td>whether has ok button in footer</td>
        </tr>
        <tr>
          <td>showClear</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether has clear button in header</td>
        </tr>
        <tr>
          <td>timePicker</td>
          <td>React Element</td>
          <td></td>
          <td>rc-timer-picker/lib/module/panel element</td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td>Function(date: moment[])</td>
          <td></td>
          <td>called when a date range is selected from calendar</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function(date: moment[])</td>
          <td></td>
          <td>called when a date range is changed inside calendar (next year/next month/keyboard)</td>
        </tr>
        <tr>
          <td>dateInputPlaceholder</td>
          <td>String[]</td>
          <td></td>
          <td>range date input's placeholders</td>
        </tr>
        <tr>
          <td>disabledTime</td>
          <td>Function(current: moment[], type:'start'|'end'):Object</td>
          <td></td>
          <td>a function which return a object with member of disabledHours/disabledMinutes/disabledSeconds according to rc-time-picker</td>
        </tr>
        <tr>
          <td>type</td>
          <td>enum('both','start', 'end')</td>
          <td>both</td>
          <td>whether fix start or end selected value. check start-end-range example</td>
        </tr>
    </tbody>
</table>

### rc-calendar/lib/Picker props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td></td>
          <td>prefixCls of this component</td>
        </tr>
        <tr>
          <td>calendar</td>
          <td>Calendar React Element</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td></td>
          <td>whether picker is disabled</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String|Object</td>
          <td></td>
          <td>one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']</td>
        </tr>
        <tr>
          <td>align</td>
          <td>Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align)</td>
          <td></td>
          <td>value will be merged into placement's align config.</td>
        </tr>
        <tr>
          <td>animation</td>
          <td>String</td>
          <td></td>
          <td>index.css support 'slide-up'</td>
        </tr>
        <tr>
          <td>transitionName</td>
          <td>String</td>
          <td></td>
          <td>css class for animation</td>
        </tr>
        <tr>
          <td>value</td>
          <td>moment|moment[]</td>
          <td></td>
          <td>current value like input's value</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>moment|moment[]</td>
          <td></td>
          <td>defaultValue like input's defaultValue</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function</td>
          <td></td>
          <td>called when select a different value</td>
        </tr>
        <tr>
          <td>onOpenChange</td>
          <td>(open:boolean) => void</td>
          <td></td>
          <td>called when open/close picker</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Boolean</td>
          <td></td>
          <td>current open state of picker. controlled prop</td>
        </tr>
        <tr>
          <td>getCalendarContainer</td>
          <td>() => HTMLElement</td>
          <td>() => {return document.body;}</td>
          <td>dom node where calendar to be rendered into</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

react-date-dpr is released under the MIT license.
