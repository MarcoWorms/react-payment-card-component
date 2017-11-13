import React from 'react'
import { shallow } from 'enzyme'
import PaymentCard from './'

describe('PaymentCard', () => {
  it('should mount', () => {
    const wrapper = shallow(
      <PaymentCard />
    )

    expect(wrapper.find('.flipped')).toHaveLength(0)
    expect(wrapper.find('.cardWrapper')).toHaveLength(1)
  })

  it('should mount with bank', () => {
    shallow(
      <PaymentCard
        bank="default"
      />
    )
  })

  it('should mount with brand', () => {
    shallow(
      <PaymentCard
        brand="mastercard"
      />
    )
  })

  it('should mount with type', () => {
    shallow(
      <PaymentCard
        type="gold"
      />
    )
  })

  it('should mount with number', () => {
    const wrapper = shallow(
      <PaymentCard
        number="4111111111111111"
      />
    )

    expect(wrapper.text()).toContain('4111 1111 1111 1111')
  })

  it('should mount with cvv', () => {
    shallow(
      <PaymentCard
        cvv="123"
      />
    )
  })

  it('should mount with holderName', () => {
    shallow(
      <PaymentCard
        holderName="Fulano de tal"
      />
    )
  })

  it('should mount with expiration', () => {
    shallow(
      <PaymentCard
        expiration="12/19"
      />
    )
  })

  it('should mount with flipped', () => {
    const wrapper = shallow(
      <PaymentCard
        flipped
      />
    )

    expect(wrapper.find('.flipped')).toHaveLength(1)
  })

  it('should mount full component', () => {
    shallow(
      <PaymentCard
        bank="default"
        brand="mastercard"
        number="4111111111111111"
        cvv="123"
        holderName="Fulano de Tal"
        expiration="12/19"
        flipped
      />
    )
  })
})
