import React from 'react'
import { shallow } from 'enzyme'
import PaymentCard from './PaymentCard'

describe('PaymentCard', () => {
  it('should mount', () => {
    shallow(
      <PaymentCard />
    )
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
    shallow(
      <PaymentCard
        number="4111111111111111"
      />
    )
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
    shallow(
      <PaymentCard
        flipped
      />
    )
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
