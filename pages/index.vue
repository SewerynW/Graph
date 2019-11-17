<template>
  <div class="container">
    <Header />
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
import Header from '@/components/Header'

export default {
  components: {
    LineChart,
    Header
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
            data: [40, 45, 10, -30, -5, 40, 39, 80, 40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              console.log('Item z wykresu.', tooltipItem)
              console.log('index itemu.', tooltipItem.index)
              console.log('data', data.datasets[0].data)
              return `wcześniejszy ${
                data.datasets[0].data[tooltipItem.index - 1]
              }`
            }
          }
        }
      }
    }
  },

  mounted() {
    this.loaded = false
    setTimeout(() => {
      console.log('Done')
      this.loaded = true
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
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
