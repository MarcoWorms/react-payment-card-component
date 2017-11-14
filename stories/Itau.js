import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Ítau', module)
  .add('Black', () => (
    <PaymentCardContainer
      bank="itau"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
  .add('Black Personnalité', () => (
    <PaymentCardContainer
      bank="itau"
      type="black-personnalite"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
