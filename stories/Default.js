import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCard from '../src/components/PaymentCard/PaymentCard'

class CardContainer extends Component {
  constructor () {
    super()
    this.state = {
      flipped: false,
    }
  }

  render () {
    return (
      <div>
        <PaymentCard
          bank="default"
          brand="mastercard"
          number="4111111111111111"
          cvv="123"
          holderName="Fulano de Tal"
          expiration="12/19"
          flipped={this.state.flipped}
        />
        <br />
        <button onClick={() => {
          const flipped = !this.state.flipped
          this.setState({ flipped })
        }}>
          Flip the card
        </button>
      </div>
    )
  }
}

storiesOf('Default', module)
  .add('Normal', () => (
    <CardContainer />
  ))
