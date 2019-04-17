import React from 'react';

const ValidLineCharts = ({data}) => {
  if (data) {
    let time = [];
    let totalCount = ['Total Count'];
    let incompleted = ['Incompleted'];
    for (let i = 1; i < data.length; i++) {
      time.push(data[i][0]);
      totalCount.push(data[i][1]);
      incompleted.push(data[i][2]);
    }

    var chart = c3.generate({
      bindto: '#chart',
      data: {
          columns: [totalCount, incompleted]
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
