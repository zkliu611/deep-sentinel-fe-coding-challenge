import React from 'react';

const ValidLineCharts = ({data}) => {
  if (data) {
    let currentData = data.slice(-20); // by default, only display the last 20 data points
    let time = [];
    let totalCount = ['Total Count'];
    let imcompleted = ['Imcompleted'];
    for (let i = 1; i < currentData.length; i++) {
      time.push(currentData[i][0]);
      totalCount.push(currentData[i][1]);
      imcompleted.push(currentData[i][2]);
    }

    var chart = c3.generate({
      bindto: '#chart',
      data: {
          // x: 'x',
          columns: [totalCount, imcompleted]
      },
      legend: {
        position: 'right'
      },
      axis: {
        x: {
          type: 'category',
          categories: time
        }
      }
    });

    return (
      <div id='chart'>Line Chart</div>
    )

  } else {
    return <div></div>
  }
}

export default ValidLineCharts;
