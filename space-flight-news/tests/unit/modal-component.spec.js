import { shallowMount } from '@vue/test-utils'
import ModalComponent from '@/components/ModalComponent'

describe('ModalComponent', () => {
  test('emits "go-to-site" event when button is clicked', () => {
    const wrapper = shallowMount(ModalComponent, {
      propsData: {
        id: 1,
        site: 'https://example.com'
      }
    })

    wrapper.find('.btn-action').trigger('click')
    expect(wrapper.emitted()['go-to-site'])
  })

  test('opens a new tab with the given site when button is clicked', () => {
    const openMock = jest.fn()
    window.open = openMock

    const wrapper = shallowMount(ModalComponent, {
      propsData: {
        id: 1,
        site: 'https://example.com'
      }
    })

    wrapper.find('.btn-action').trigger('click')
    expect(openMock).toHaveBeenCalledWith('https://example.com', '_blank')
  })

  test('has the correct id', () => {
    const wrapper = shallowMount(ModalComponent, {
      propsData: {
        id: 1,
        site: 'https://example.com'
      }
    })

    expect(wrapper.attributes().id).toBe('1')
  })
})
