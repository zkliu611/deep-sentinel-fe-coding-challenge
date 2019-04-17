import React from 'react';

const RatioPieChart = ({data}) => {
  if (data) {
    let normalRatio = 0;
    let blankScreenRatio = 0;
    let endEarlyRatio = 0;
    let noActRatio = 0;
    let noDeliveryRatio = 0;
    let handoffRatio = 0;
    let refreshRatio = 0;
    for (let i = 1; i < data.length; i++) {
      normalRatio += Number(data[i][2]);
      blankScreenRatio += Number(data[i][3]);
      endEarlyRatio += Number(data[i][4]);
      noActRatio += Number(data[i][5]);
      noDeliveryRatio += Number(data[i][6]);
      handoffRatio += Number(data[i][7]);
      refreshRatio += Number(data[i][8]);
    }
    
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
    });

    return (
      <div id='chart5'>Ratio Pie Chart</div>
    )

  } else {
    return <div></div>
  }
}

export default RatioPieChart;