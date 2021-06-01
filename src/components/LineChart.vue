<template>
  <apexcharts
    :width="width"
    :height="height"
    type="line"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { timeConverter } from '../fetchStats'
import moment from 'moment'
moment().format()

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
  computed: {
    chartOptions: function () {
      return {
        chart: {
          id: 'basic-line'
        },
        xaxis: {
          categories: this.times,
          labels: {
            formatter: (value) => {
              return moment.unix(value).format('dd MMM YYYY hh:mm')
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
      }
    },
    series: function () {
      return [
        {
          name: this.title,
          data: this.fromMeToGmail
        }
      ]
    }
  }
}
</script>

<style scoped></style>
