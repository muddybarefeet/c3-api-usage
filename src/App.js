import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
import moment from 'moment-timezone';

// import logo from './logo.svg';
import './App.css';

var dummyData = {
  chartData: [
    {apiCalls:0,date:"2016-09-01"},
    {apiCalls:2500,date:"2016-09-02"},
    {apiCalls:0,date:"2016-09-03"},
    {apiCalls:0,date:"2016-09-04"},
    {apiCalls:0,date:"2016-09-05"},
    {apiCalls:0,date:"2016-09-06"},
    {apiCalls:0,date:"2016-09-07"},
    {apiCalls:0,date:"2016-09-08"},
    {apiCalls:200,date:"2016-09-09"},
    {apiCalls:1000,date:"2016-09-10"},
    {apiCalls:2839,date:"2016-09-11"},
    {apiCalls:4290,date:"2016-09-12"},
    {apiCalls:3720,date:"2016-09-13"},
    {apiCalls:1876,date:"2016-09-14"},
    {apiCalls:2003,date:"2016-09-15"},
    {apiCalls:789,date:"2016-09-16"},
    {apiCalls:400,date:"2016-09-17"},
    {apiCalls:100,date:"2016-09-18"},
    {apiCalls:1040,date:"2016-09-19"},
    {apiCalls:500,date:"2016-09-20"},
    {apiCalls:3000,date:"2016-09-21"},
    {apiCalls:1500,date:"2016-09-22"},
    {apiCalls:0,date:"2016-09-23"},
    {apiCalls:0,date:"2016-09-24"},
    {apiCalls:0,date:"2016-09-25"},
    {apiCalls:0,date:"2016-09-26"},
    {apiCalls:0,date:"2016-09-27"},
    {apiCalls:0,date:"2016-09-28"},
    {apiCalls:0,date:"2016-09-29"},
    {apiCalls:0,date:"2016-09-30"}
  ],
  lastMonthBillIncents:0,
  lastUpdatedAt:"Thursday, September 29th 2016, 7:47:48 am AEST",
  thisMonthBillInCents:0,
  totalCallsLastMonth:0,
  totalCallsThisMonth:0
}



class App extends Component {

  constructor() {
   super();
   this.state = {
   };
  }

  componentDidMount(){
    this.buildChart();
  }

  buildChart () {

    var colData = ['API calls'].concat(dummyData.chartData.map(function (datum) {
      return datum.apiCalls;
    }));

    var tickText = ['date'].concat(dummyData.chartData.map(function (datum, i) {
      if (i===0) return moment(datum.date).tz('Australia/Sydney').format('DD-MMMM');
      return moment(datum.date).tz('Australia/Sydney').format('DD');
    }));

    let chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
          x:'date',
          columns: [
              colData,
              tickText
          ]
      },
      axis: {
          x: {
              type: 'category',
              tick: {
                rotate: -65
              },
          },
          y: {
            max: Math.max(Math.max.apply(null, colData.slice(1)),3000),
            min: 0,
            padding: {top:0, bottom:0}
          }
      },
      grid: {
          y: {
              lines: [
                  {value: 2500, text: 'Free-tier', axis: 'y', position: 'start'},
              ]
          }
      },
      padding: {
        top: 0,
        right: 60,
        bottom: 60,
        left: 60,
      },
    });
  }


  render() {

    return (
      <div className="App">
        <h1>API Usage</h1>
        <div ref="chart"></div>
      </div>
    );
  }
}

export default App;
