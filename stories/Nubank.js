import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import PaymentCard from '../src/components/PaymentCard/PaymentCard'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flipped: false,
    }
  }

  render () {
    return (
      <div>
        <PaymentCard
          bank="nubank"
          brand="mastercard"
          number="4111111111111111"
          cvv="123"
          holderName="Fulano de Tal"
          expiration="12/19"
          type={this.props.type}
          flipped={this.state.flipped}
        />
        <br />
        <button onClick={() => {
          const flipped = !this.state.flipped
          this.setState({ flipped })
        }}
        >
          Flip the card
        </button>
      </div>
    )
  }
}

CardContainer.propTypes = {
  type: PropTypes.string.isRequired,
}

storiesOf('Nubank', module)
  .add('Gold', () => (
    <CardContainer type="gold" />
  ))
  .add('Platinum', () => (
    <CardContainer type="platinum" />
  ))
