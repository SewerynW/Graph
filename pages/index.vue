<template>
  <div class="container">
    <Header />
    <div class="amchart">
      <am-chart></am-chart>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AmChart from '@/components/AmChart'

export default {
  components: {
    Header,
    AmChart
  },

  async fetch({ store }) {
    await store.dispatch('getCurrencyInfo')
    await store.commit('countVariation')
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .chartContainer {
    position: relative;
    overflow-x: scroll;
    width: 95%;
    .chart {
      background-color: #212733;
      border-radius: 0.5em;
      padding: 1em;
      width: 100%;
      min-width: 100%;
    }
  }

  .amchart {
    height: 35em;
    width: 95%;
  }
}
</style>
