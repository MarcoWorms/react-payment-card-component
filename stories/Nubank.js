import React from 'react'
import { storiesOf } from '@storybook/react'

import CreditCard from '../src/CreditCard'

storiesOf('Nubank', module)
  .add('Platinum', () => (
    <div>
      <CreditCard
        bank="nubank"
        brand="mastercard"
        number="4111111111111111"
        holderName="Fulano de Tal"
        expiration="12/19"
        type="platinum"
      />
    </div>
  ))
  .add('Gold', () => (
    <div>
      <CreditCard
        bank="nubank"
        brand="mastercard"
        number="4111111111111111"
        holderName="Fulano de Tal"
        expiration="12/19"
        type="gold"
      />
    </div>
  ))
