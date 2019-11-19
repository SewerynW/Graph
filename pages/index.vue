<template>
  <div class="container">
    <Header />
    <div class="chartContainer">
      <line-chart
        v-if="loaded"
        :chartData="chartData"
        :options="chartOptions"
        class="chart"
      />
    </div>
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
      vvv: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      bbb: [22, 33, 44, 12, 12.2, 45.23, 23, 13.34, 50],
      rates: [],
      loaded: false,
      chartData: null,
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

  // options: {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   tooltips: {
  //     callbacks: {
  //       label: (tooltipItem, data) => {
  //         console.log('Item z wykresu.', tooltipItem)
  //         console.log('index itemu.', tooltipItem.index)
  //         console.log('data', data.datasets[0].data)
  //         return `wcześniejszy ${
  //           data.datasets[0].data[tooltipItem.index - 1]
  //         }`
  //       }
  //     }
  //   }
  // }

  computed: {
    currencyRate() {
      const tp = this.$store.getters.currencyRate
      console.log('cosss', tp)
      return tp
    }
  },
  async fetch({ store }) {
    await store.dispatch('getExchangeRate')
  },

  mounted() {
    this.fillData()
    console.log('data z API', this.$store.getters.currencyDate)
    console.log(typeof this.$store.getters.currencyDate)
  },

  methods: {
    fillData() {
      this.loaded = false
      console.log(this.chartData)
      this.chartData = {
        labels: this.$store.getters.currencyDate,
        datasets: [
          {
            label: '1 USD to CLP',
            data: this.$store.getters.currencyRate,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            // borderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)'
          }
        ]
      }
      console.log(this.chartData)
      this.loaded = true
    }
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
  .chartContainer {
    position: relative;
    overflow-x: scroll;
    width: 100%;
    .chart {
      background-color: #212733;
      border-radius: 0.5em;
      padding: 1em;
      width: 100%;
      min-width: 100%;
    }
  }
}
</style>
