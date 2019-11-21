<template>
  <div class="container">
    <Header />
    <div class="amchart">
      <am-chart></am-chart>
    </div>
    <div class="information">
      <Description :text="info" />
      <Description :text="info2" />
      <Description :text="info3" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AmChart from '@/components/AmChart'
import Description from '@/components/Description'

export default {
  components: {
    Header,
    AmChart,
    Description
  },

  data() {
    return {
      info: `Hello everyone,
        I wanna introduce you a Chart on which you can observe the exchange rate
        of CLP against the USD.`,
      info2: `Move the cursor on the Chart to show numbers. You can see course of the day and also Variation which comparing marked day with the previous day.`,
      info3: `Easily you can check Rates from 2018 till today. You can also use zoom to see exactly every day. `
    }
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

  .amchart {
    height: 35em;
    width: 95%;
  }

  .information {
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
