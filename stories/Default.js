import React from 'react'
import { storiesOf } from '@storybook/react'

import CreditCard from '../src/CreditCard'

storiesOf('Default', module)
  .add('Simple', () => (
    <div>
      <CreditCard
        bank="default"
        brand="mastercard"
        number="4111111111111111"
        holderName="Fulano de Tal"
        expiration="12/19"
      />
    </div>
  ))
