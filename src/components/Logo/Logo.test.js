import React from 'react'
import { shallow } from 'enzyme'
import Logo from './'
import PaymentCard from '../PaymentCard'

it('should mount with bank logo and brand logo', () => {
  const wrapper = shallow(
    <PaymentCard
      bank="nubank"
      brand="mastercard"
    />
  )

  expect(wrapper.find(Logo)).toHaveLength(3)
})
