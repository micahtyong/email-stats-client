<template>
  <div>
    <apexcharts
      :width="width"
      :height="height"
      type="line"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { timeConverter } from '../fetchStats'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    title: String,
    times: Array,
    fromMeToGmail: Array,
    width: String || Number,
    height: String || Number
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-line'
        },
        xaxis: {
          categories: this.times,
          labels: {
            formatter: (value) => {
              return timeConverter(value)
            },
            hideOverlappingLabels: true
          },
          title: {
            text: 'Time',
            offsetX: 0,
            offsetY: 8,
            tickPlacement: 'on',
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title'
            }
          }
        },
        yaxis: {
          show: true,
          title: {
            text: 'Count',
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title'
            }
          }
        }
      },
      series: [
        {
          name: this.title,
          data: this.fromMeToGmail
        }
      ]
    }
  }
}
</script>
