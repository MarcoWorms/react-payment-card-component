import React from 'react'
import PropTypes from 'prop-types'
import './PaymentCard.css'
import banksLogos from './images/banks'

const formatCardNumber = number => number.replace(/(\d{4})/g, '$1 ')

const PaymentCard = (props) => {
  const {
    bank,
    type,
    number,
    cvv,
    expiration,
    holderName,
    brand,
    flipped,
  } = props

  const classNames = () => ([
    'card',
    bank,
    type,
    flipped ? 'flipped' : '',
  ]).join(' ')

  return (
    <div className="cardWrapper">
      <div className={classNames()}>
        <div className="front">
          <img src={banksLogos[bank]} alt={bank} className="logo" />
          <div className="chip">
            <div className="horizontalLine" />
            <div className="verticalLine" />
          </div>
          <div className="number">
            {formatCardNumber(number)}
          </div>
          <div className="expiration">
            {expiration}
          </div>
          <div className="holderName">
            {holderName}
          </div>
          <div className={`brand ${brand}`} />
        </div>
        <div className="back">
          <div className="cvv">
            {cvv}
          </div>
        </div>
      </div>
    </div>
  )
}

PaymentCard.propTypes = {
  bank: PropTypes.oneOf([
    'default',
    'nubank',
  ]),
  type: PropTypes.string.isRequired,
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard',
  ]),
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

PaymentCard.defaultProps = {
  bank: 'default',
  brand: 'mastercard',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
}

export default PaymentCard
