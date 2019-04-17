import React from 'react';

const RatioHistorgram = ({data}) => {
  if (data) {
    let currentData = data.slice(-20)
    let time = [];
    let totalCount = ['Total Count'];
    let normalRatio = ['Normal Ratio'];
    let blankScreenRatio = ['Black Screen Ratio'];
    let endEarlyRatio = ['End Early Ratio'];
    let noActRatio = ['No Act Ratio'];
    let noDeliveryRatio = ['No Delivery Ratio'];
    let handoffRatio = ['Handoff Ratio'];
    let refreshRatio = ['Refresh Ratio'];
    for (let i = 1; i < currentData.length; i++) {
      time.push(currentData[i][0]);
      totalCount.push(currentData[i][1]);
      normalRatio.push(currentData[i][2]);
      blankScreenRatio.push(currentData[i][3]);
      endEarlyRatio.push(currentData[i][4]);
      noActRatio.push(currentData[i][5]);
      noDeliveryRatio.push(currentData[i][6]);
      handoffRatio.push(currentData[i][7]);
      refreshRatio.push(currentData[i][8]);
    }

    var chart = c3.generate({
      bindto: '#chart4',
      data: {
          columns: [ 
            normalRatio, 
            blankScreenRatio, 
            endEarlyRatio, 
            noActRatio, 
            noDeliveryRatio, 
            handoffRatio, 
            refreshRatio],
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
      <div id='chart4'>Ratio Histogram</div>
    )

  } else {
    return <div></div>
  }
}

export default RatioHistorgram;