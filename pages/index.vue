<template>
  <div class="container">
    <lineChart
      v-if="loaded"
      :chartData="chartData"
      :chartOptions="chartOptions"
      class="chart"
    />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'

export default {
  components: {
    LineChart
  },

  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 45, 10, 40, 39, 80, 40]
          },
          {
            label: 'Difference',
            backgroundColor: '#f87979',
            data: [40, 45, 10, 40, 39, 80, 40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  mounted() {
    this.loaded = false
    setTimeout(() => {
      console.log('Done')
      this.loaded = true
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .chart {
    background-color: #212733;
    border-radius: 0.5em;
    padding: 1em;
    height: 30em;
    width: 70%;
  }
}
</style>
