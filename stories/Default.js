import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('Default', module)
  .add('Normal', () => (
    <PaymentCardContainer
      number="4111111111111111"
      cvv="123"
      holderName="Fulano de Tal"
      expiration="12/19"
    />
  ))
