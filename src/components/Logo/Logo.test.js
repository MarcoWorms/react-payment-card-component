import React from 'react'
import { shallow } from 'enzyme'
import Logo from './'
import PaymentCard from '../PaymentCard'

it('should mount with logo', () => {
  const wrapper = shallow(
    <PaymentCard
      bank="nubank"
    />
  )

  expect(wrapper.find(Logo)).toHaveLength(1)
})
