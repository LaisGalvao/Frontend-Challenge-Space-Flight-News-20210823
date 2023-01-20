import { mount } from '@vue/test-utils'
import ModalComponent from '@/components/ModalComponent.vue'

describe('ModalComponent', () => {
  test('emits an event when the goToSite button is clicked', () => {
    const wrapper = mount(ModalComponent, {
      propsData: {
        id: 1,
        site: 'https://www.example.com'
      }
    })

    const button = wrapper.find('.btn-action')

    button.trigger('click')
    expect(wrapper.vm.goToSite).toHaveBeenCalled()
    expect(wrapper.vm.goToSite).toHaveBeenCalledWith('https://www.example.com')
  })
})
