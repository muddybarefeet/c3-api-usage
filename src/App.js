import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

// import logo from './logo.svg';
import './App.css';


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
    let chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
          x: 'x',
          columns: [
              ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06', '2013-01-07', '2013-01-08', '2013-01-09', '2013-01-10', '2013-01-11', '2013-01-12','2013-01-13', '2013-01-14', '2013-01-15', '2013-01-16', '2013-01-17', '2013-01-18', '2013-01-19', '2013-01-20', '2013-01-21', '2013-01-22'],
              ['y', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250]
          ]
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%d'
              }
          },
          y: {
            max: 3000,
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
      }
    });
    // chart.axis.range({max: {x: 30}, min: {x: 1}});
    //how to get month shown and how to get only line tooltip shown
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
