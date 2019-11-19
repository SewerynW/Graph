export const state = () => ({
  currencyInformation: []
})

export const getters = {
  data: (state) => state.currencyInformation,

  currencyRate: (state) => {
    const tp = state.currencyInformation.map((day) => day.valor)
    return tp
  },

  currencyDate: (state) => {
    const tp = state.currencyInformation.map((day) => day.fecha.slice(0, 10))
    return tp
  },

  transformedInformacton: ({ currencyInformation }) => {
    const tp = currencyInformation.map(({ fecha, valor, variation }) => {
      return {
        date: new Date(fecha.slice(0, 10)),
        value: Number(valor),
        variation: Number(variation)
      }
    })
    return tp.reverse()
  }
}

export const mutations = {
  setCurrencyInfo: (state, payload) => {
    state.currencyInformation = payload
  },

  countVariation: (state) => {
    const tpRates = state.currencyInformation.map((day) => day.valor)
    const tp = state.currencyInformation.map((day, index) => {
      const tpNumber = (day.valor - tpRates[index + 1]).toPrecision(2)
      return {
        ...day,
        variation: tpNumber
      }
    })
    state.currencyInformation = tp
  }
}

export const actions = {
  async getCurrencyInfo({ commit }) {
    const data2019 = await this.$axios.$get(
      'https://mindicador.cl/api/dolar/2019'
    )
    const data2018 = await this.$axios.$get(
      'https://mindicador.cl/api/dolar/2018'
    )
    const tp = [...data2019.serie, ...data2018.serie]
    await commit('setCurrencyInfo', tp)
  }
}
