import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import CardsComponent from '@/components/CardsComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'

describe('HomeView', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HomeView)
  })

  test('renders a CardsComponent for each item in cards', () => {
    wrapper.setData({ loading: false })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAllComponents(CardsComponent).length).toEqual(1)
    })
  })

  test('renders a ModalComponent for each item in cards', () => {
    wrapper.setData({ loading: false })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAllComponents(ModalComponent).length).toEqual(1)
    })
  })

  test('displays a loading spinner when loading is true', () => {
    wrapper.setData({ loading: true })
    expect(wrapper.find('.loading').exists()).toBe(true)
  })

  test('hides the loading spinner when loading is false', () => {
    wrapper.setData({ loading: false })
    expect(wrapper.find('.loading').exists()).toBe(false)
  })

  test('displays "No results found" when cards is empty', () => {
    wrapper.setData({ loading: false, cards: [] })
    expect(wrapper.find('h2').text()).toEqual('No results found')
  })
})
