export const state = () => ({
  text: 'Hello World',
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
  }
}

export const mutations = {
  setExchangeRate: (state, payload) => {
    state.currencyInformation = payload
  }
}

export const actions = {
  async getExchangeRate({ commit }) {
    console.log('robie zapytanie do API')
    const data = await this.$axios.$get('https://mindicador.cl/api/dolar/2019')
    commit('setExchangeRate', data.serie)
    // console.log('Z API przyszło', data.serie)
  }
}
