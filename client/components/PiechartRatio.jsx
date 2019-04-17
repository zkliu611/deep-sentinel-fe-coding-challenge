import React from 'react';

const RatioPieChart = ({data}) => {
  if (data) {
    let currentData = data.slice(-20)
    let normalRatio = 0;
    let blankScreenRatio = 0;
    let endEarlyRatio = 0;
    let noActRatio = 0;
    let noDeliveryRatio = 0;
    let handoffRatio = 0;
    let refreshRatio = 0;
    for (let i = 1; i < currentData.length; i++) {
      normalRatio += Number(currentData[i][2]);
      blankScreenRatio += Number(currentData[i][3]);
      endEarlyRatio += Number(currentData[i][4]);
      noActRatio += Number(currentData[i][5]);
      noDeliveryRatio += Number(currentData[i][6]);
      handoffRatio += Number(currentData[i][7]);
      refreshRatio += Number(currentData[i][8]);
    }
    console.log(normalRatio, blankScreenRatio, endEarlyRatio, noActRatio, noDeliveryRatio, handoffRatio, refreshRatio)
    var chart = c3.generate({
      bindto: '#chart5',
      data: {
          columns: [
            ['Normal Ratio', normalRatio], 
            ['Blank Screen Ratio', blankScreenRatio], 
            ['End Early Ratio', endEarlyRatio], 
            ['No Act Ratio', noActRatio], 
            ['No Delivery Ratio', noDeliveryRatio], 
            ['Handoff Ratio', handoffRatio], 
            ['RefreshRatio', refreshRatio]
          ],
          type : 'pie'
      },
      legend: {
        position: 'right'
      }
      // axis: {
      //   x: {
      //     type: 'category',
      //     categories: time
      //   }
      // }
    });

    return (
      <div id='chart5'>Ratio Pie Chart</div>
    )

  } else {
    return <div></div>
  }
}

export default RatioPieChart;