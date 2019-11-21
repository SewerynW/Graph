import { shallowMount } from '@vue/test-utils'
import index from '@/pages/index'

const wrapper = shallowMount(index)

describe('Testing main page', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
