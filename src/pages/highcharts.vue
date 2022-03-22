<template>
    <div id="highCharts" style="width: 800px; height: 300px"></div>
</template>

<script>
// 最主要是这里模块的引入 很坑
import Highcharts from "highcharts"
// 这个一定要引入 不然报错
import HighchartsMore from "highcharts/highcharts-more"
HighchartsMore(Highcharts)

export default {
  name: 'highchart',
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      this.draw();
    },
    draw() {
       Highcharts.chart("highCharts", {
        chart: {
          type: "bubble",
          plotBorderWidth: 1,
          zoomType: "xy",
        },
        title: {
          text: "Highcharts 3D气泡图",
        },
        xAxis: {
          gridLineWidth: 1,
        },
        yAxis: {
          startOnTick: false,
          endOnTick: false,
        },
        series: [
          {
            name: "气泡1",
            data: [
              [9, 81, 63],
              [98, 5, 89],
              [51, 50, 73],
              [41, 22, 14],
              [58, 24, 20],
              [78, 37, 34],
              [55, 56, 53],
              [18, 45, 70],
              [42, 44, 28],
              [3, 52, 59],
              [31, 18, 97],
              [79, 91, 63],
              [93, 23, 23],
              [44, 83, 22],
            ],
            marker: {
              fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                  [0, "rgba(255,255,255,0.5)"],
                  [
                    1,
                    Highcharts.Color(Highcharts.getOptions().colors[0])
                      .setOpacity(0.5)
                      .get("rgba"),
                  ],
                ],
              },
            },
          },
          {
            name: "气泡2",
            data: [
              [42, 38, 20],
              [6, 18, 1],
              [1, 93, 55],
              [57, 2, 90],
              [80, 76, 22],
              [11, 74, 96],
              [88, 56, 10],
              [30, 47, 49],
              [57, 62, 98],
              [4, 16, 16],
              [46, 10, 11],
              [22, 87, 89],
              [57, 91, 82],
              [45, 15, 98],
            ],
            marker: {
              fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                  [0, "rgba(255,255,255,0.5)"],
                  [
                    1,
                    Highcharts.Color(Highcharts.getOptions().colors[1])
                      .setOpacity(0.5)
                      .get("rgba"),
                  ],
                ],
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>

