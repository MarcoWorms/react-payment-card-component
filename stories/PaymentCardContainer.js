import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PaymentCard from '../src/components/PaymentCard'

class PaymentCardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flipped: false,
    }

    this.flipCard = this.flipCard.bind(this)
  }

  flipCard () {
    const flipped = !this.state.flipped
    this.setState({ flipped })
  }

  render () {
    return (
      <div>
        <PaymentCard
          bank={this.props.bank}
          type={this.props.type}
          brand={this.props.brand}
          number={this.props.number}
          cvv={this.props.cvv}
          holderName={this.props.holderName}
          expiration={this.props.expiration}
          flipped={this.state.flipped}
        />
        <br />
        <button onClick={this.flipCard}>
          Flip the card
        </button>
      </div>
    )
  }
}

PaymentCardContainer.propTypes = {
  bank: PropTypes.oneOf([
    'default',
    'nubank',
  ]),
  type: PropTypes.string,
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard',
  ]),
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
}

PaymentCardContainer.defaultProps = {
  bank: 'default',
  type: '',
  brand: 'mastercard',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
}

export default PaymentCardContainer
