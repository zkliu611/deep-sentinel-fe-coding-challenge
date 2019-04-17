import React from 'react';
import ReactDOM from 'react-dom';
import ValidLineChart from './components/LineChartValid.jsx';
import ValidHistogram from './components/HistogramValid.jsx';
import RatioLineChart from './components/LineChartRatio.jsx';
import RatioHistogram from './components/HistogramRatio.jsx';
import RatioPiechart from './components/PiechartRatio.jsx';
import Search from './components/Search.jsx';
import Papa from 'papaparse';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validData: [],
      ratioData: [],
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
      this.setState({
        validData: data
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
      this.setState({
        ratioData: data
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  getData(fromDate, toDate) {
    
  }

  render () {
    return (
    <div>
      <h1>Valid-Invalid</h1>
      <br/>
      <Search getData={this.getData.bind(this)} />
      <br/><br/>
      <ValidLineChart data={this.state.validData} />
      <br/>
      <ValidHistogram data={this.state.validData} />
      <br/>
      <h1>Ratio</h1>
      <br/>
      <Search getData={this.getData.bind(this)} />
      <br/><br/>
      <RatioLineChart data={this.state.ratioData} />
      <br/>
      <RatioHistogram data={this.state.ratioData} />
      <br/>
      <RatioPiechart data={this.state.ratioData} />
      <br/>
      
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

