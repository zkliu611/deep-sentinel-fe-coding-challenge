import React from 'react';
import ReactDOM from 'react-dom';
import ValidLineChart from './components/LineChartValid.jsx';
import ValidHistogram from './components/HistogramValid.jsx';
import RatioLineChart from './components/LineChartRatio.jsx';
import RatioHistogram from './components/HistogramRatio.jsx';
import RatioPiechart from './components/PiechartRatio.jsx';
import ValidSearch from './components/ValidSearch.jsx';
import RatioSearch from './components/RatioSearch.jsx';
import Papa from 'papaparse';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validData: [],
      validDataRange: [],
      ratioData: [],
      ratioDataRange: [],
      fromDate: '',
      toDate: ''
    }
  }

  componentDidMount() {
    axios.get('/valid')
    .then(res => {
      let rawData = res.data
      let data = Papa.parse(rawData).data
      data.pop(); // remove last element in array, which is empty
      let dataRange = data.slice(-20);
      this.setState({
        validData: data,
        validDataRange: dataRange
      })
    })
    .catch(err => {
      console.log(err)
    })

    axios.get('/ratio')
    .then(res => {
      let rawData = res.data
      let data = Papa.parse(rawData).data
      data.pop(); // remove last element in array, which is empty
      let dataRange = data.slice(-20); // default display is last 20 data from csv
      this.setState({
        ratioData: data,
        ratioDataRange: dataRange
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  getValidData(fromDate, toDate) {
    let fDate = new Date(fromDate + ' 00:00:01')
    let tDate = new Date(toDate + ' 23:59:59')
    console.log(fDate, tDate, 'date range')
    if (fDate > tDate) {
      alert('Invalid Date Range')
    } else {
      let startIndex = 0;
      let endIndex = 0;
      let data = this.state.validData
      for (let i = 1; i < data.length; i++) {
        let d = new Date(data[i][0]);
        if (d > fDate) {
          startIndex = i;
          break;
        } 
      }
      for (let i = startIndex; i < data.length; i++) {
        let d = new Date(data[i][0])
        if (d > tDate){
          endIndex = i;
          break;
        } 
      }
      let currentData = data.slice(startIndex, endIndex)
      this.setState({
        validDataRange: currentData
      })
    }
  }

  getRatioData(fromDate, toDate) {
    let fDate = new Date(fromDate + ' 00:00:01')
    let tDate = new Date(toDate + ' 23:59:59')
    if (fDate > tDate) {
      alert('Invalid Date Range')
    } else {
      let startIndex = 0;
      let endIndex = 0;
      let data = this.state.ratioData
      for (let i = 1; i < data.length; i++) {
        let d = new Date(data[i][0])
        if (d > fDate){
          startIndex = i;
          break;
        } 
      }
      for (let i = startIndex; i < data.length; i++) {
        let d = new Date(data[i][0])
        if (d > tDate){
          endIndex = i;
          break;
        } 
      }
      let currentData = data.slice(startIndex, endIndex)
      this.setState({
        ratioDataRange: currentData
      })
    }
  }

  render () {
    return (
    <div>
      <h1>Valid-Invalid</h1>
      <br/>
      <ValidSearch getData={this.getValidData.bind(this)} />
      <br/><br/>
      <ValidLineChart data={this.state.validDataRange} />
      <br/>
      <ValidHistogram data={this.state.validDataRange} />
      <br/>
      <h1>Ratio</h1>
      <br/>
      <RatioSearch getData={this.getRatioData.bind(this)} />
      <br/><br/>
      <RatioLineChart data={this.state.ratioDataRange} />
      <br/>
      <RatioHistogram data={this.state.ratioDataRange} />
      <br/>
      <RatioPiechart data={this.state.ratioDataRange} />
      <br/>
      
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

