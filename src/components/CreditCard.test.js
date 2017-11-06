import React from 'react'
import { shallow } from 'enzyme'
import CreditCard from './CreditCard'

describe('CreditCard', () => {
  it('should mount', () => {
    shallow(
      <CreditCard />
    )
  })

  it('should mount with bank', () => {
    shallow(
      <CreditCard
        bank="default"
      />
    )
  })

  it('should mount with brand', () => {
    shallow(
      <CreditCard
        brand="mastercard"
      />
    )
  })

  it('should mount with type', () => {
    shallow(
      <CreditCard
        type="gold"
      />
    )
  })

  it('should mount with number', () => {
    shallow(
      <CreditCard
        number="4111111111111111"
      />
    )
  })

  it('should mount with cvv', () => {
    shallow(
      <CreditCard
        cvv="123"
      />
    )
  })

  it('should mount with holderName', () => {
    shallow(
      <CreditCard
        holderName="Fulano de tal"
      />
    )
  })

  it('should mount with expiration', () => {
    shallow(
      <CreditCard
        expiration="12/19"
      />
    )
  })

  it('should mount with flipped', () => {
    shallow(
      <CreditCard
        flipped={true}
      />
    )
  })

  it('should mount full component', () => {
    shallow(
      <CreditCard
        bank="default"
        brand="mastercard"
        number="4111111111111111"
        cvv="123"
        holderName="Fulano de Tal"
        expiration="12/19"
        flipped={true}
      />
    )
  })
})
