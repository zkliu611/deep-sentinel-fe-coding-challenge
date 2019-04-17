import React from 'react';

const ValidHistogram = ({data}) => {
  if (data) {
    let currentData = data.slice(-20);
    let time = [];
    let totalCount = ['Total Count'];
    let incompleted = ['Incomplete'];
    for (let i = 1; i < currentData.length - 1; i++) {
      time.push(currentData[i][0]);
      totalCount.push(currentData[i][1]);
      incompleted.push(currentData[i][2]);
    }
    
    var chart = c3.generate({
      bindto: '#chart1',
      data: {
          // x: 'x',
          columns: [totalCount, incompleted],
          type: 'bar'
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
      <div id='chart1'>Valid Histogram</div>
    )

  } else {
    return <div></div>
  }
}

export default ValidHistogram;
