import React from 'react';

const ValidHistogram = ({data}) => {
  if (data) {
    let time = [];
    let totalCount = ['Total Count'];
    let incompleted = ['Incomplete'];
    for (let i = 1; i < data.length - 1; i++) {
      time.push(data[i][0]);
      totalCount.push(data[i][1]);
      incompleted.push(data[i][2]);
    }
    
    var chart = c3.generate({
      bindto: '#chart1',
      data: {
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
