import React from 'react';

const RatioLineChart = ({data}) => {
  if (data) {
    console.log(data)
    let time = [];
    let totalCount = ['Total Count'];
    let normalRatio = ['Normal Ratio'];
    let blankScreenRatio = ['Black Screen Ratio'];
    let endEarlyRatio = ['End Early Ratio'];
    let noActRatio = ['No Act Ratio'];
    let noDeliveryRatio = ['No Delivery Ratio'];
    let handoffRatio = ['Handoff Ratio'];
    let refreshRatio = ['Refresh Ratio'];
    for (let i = 1; i < data.length; i++) {
      time.push(data[i][0]);
      totalCount.push(data[i][1]);
      normalRatio.push(data[i][2]);
      blankScreenRatio.push(data[i][3]);
      endEarlyRatio.push(data[i][4]);
      noActRatio.push(data[i][5]);
      noDeliveryRatio.push(data[i][6]);
      handoffRatio.push(data[i][7]);
      refreshRatio.push(data[i][8]);
    }

    var chart = c3.generate({
      bindto: '#chart3',
      data: {
          columns: [totalCount, 
            normalRatio, 
            blankScreenRatio, 
            endEarlyRatio, 
            noActRatio, 
            noDeliveryRatio, 
            handoffRatio, 
            refreshRatio]
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
      <div id='chart3'>Ratio Line Chart</div>
    )

  } else {
    return <div></div>
  }
}

export default RatioLineChart;