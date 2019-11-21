import axios from 'axios'
import { getters, mutations, actions } from '@/store/index'

const item = {
  fecha: '2018-01-01T03:00:00.000Z',
  valor: 720.5
}
const item2 = {
  fecha: '2018-01-02T03:00:00.000Z',
  valor: 750.5
}
const item3 = {
  fecha: '2018-01-03T03:00:00.000Z',
  valor: 700.2
}

jest.mock('axios')

describe('Testing Getters', () => {
  test('transformedInformacton', () => {
    const day = {
      ...item,
      variation: 0
    }
    const day2 = {
      ...item2,
      variation: 30
    }
    const day3 = {
      ...item3,
      variation: -50.3
    }

    const state = {
      currencyInformation: [day, day2, day3]
    }

    const result = getters.transformedInformacton(state)
    expect(result[1]).toHaveProperty('date')
    expect(result[2]).toHaveProperty('value')
    expect(result[0]).not.toHaveProperty('fecha')
    expect(result[1]).not.toHaveProperty('valor')
  })
})

describe('Testing Mutations', () => {
  test('setCurrencyInfo', () => {
    const state = {
      currencyInformation: []
    }

    mutations.setCurrencyInfo(state, item)
    expect(state.currencyInformation).toBe(item)
  })

  test('countVariation', () => {
    const state = {
      currencyInformation: [item, item2]
    }
    mutations.countVariation(state)
    expect(state.currencyInformation[1]).toHaveProperty('variation')
  })
})

describe('Testing Actions', () => {
  test('getCurrencyInfo', async () => {
    const year = { data: { serie: [item, item2, item3] } }
    const year2 = { data: { serie: [item, item2, item3] } }
    axios.get.mockResolvedValue(year)
    axios.get.mockResolvedValue(year2)
    const commit = jest.fn()
    await actions.getCurrencyInfo({ commit })
    expect(commit).toHaveBeenCalledWith('setCurrencyInfo', [
      ...year.data.serie,
      ...year2.data.serie
    ])
  })
})
