import { mount } from '@vue/test-utils'
import HomeViewVue from '@/views/HomeView.vue'

describe('Home view - Unit', () => {
  it('should be a vue instance', () => {
    const wrapper = mount(HomeViewVue)

    expect(wrapper.vm).toBeDefined()
  })
})
