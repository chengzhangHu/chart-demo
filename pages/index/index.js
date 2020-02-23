//index.js
//获取应用实例
const app = getApp()
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: 'ECharts 入门示例- Bar'
    },
    tooltip: {},
    legend: {
      top:30,
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  chart.setOption(option);
  return chart;
}

function initLineChart(canvas, width, height){
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: 'ECharts 入门示例 - Line'
    },
    tooltip: {},
    legend: {
      top: 30,
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20],
      lineStyle:{
        color:'#0ac7d9'
      },
      itemStyle: {
        color: '#0ac7d9'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    lineEc:{
      onInit: initLineChart
    }
  },
})
