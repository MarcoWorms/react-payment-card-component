import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Nubank', module)
  .add('Gold', () => (
    <PaymentCardContainer
      bank="nubank"
      type="gold"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
  .add('Platinum', () => (
    <PaymentCardContainer
      bank="nubank"
      type="platinum"
      brand="mastercard"
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
