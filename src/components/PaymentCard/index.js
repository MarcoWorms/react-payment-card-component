import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Logo from '../Logo'
import './style.css'

const PaymentCard = ({
  bank,
  type,
  number,
  cvv,
  expiration,
  holderName,
  brand,
  flipped,
}) => {
  const formatCardNumber = cardNumber =>
    cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')

  return (
    <div className="cardWrapper">
      <div className={classNames(
        'card',
        bank,
        `${bank}-${type}`,
        { flipped },
      )}
      >
        <div className="front">
          <Logo
            bank={bank}
            type={type}
            className="typeLogo"
          />
          <Logo
            bank={bank}
            type={type}
            className="bankLogo"
          />
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
          <Logo
            brand={brand}
            className="brandLogo"
          />
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
    'bradesco',
    'santander',
    'itau',
  ]),
  type: PropTypes.string,
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard',
    'elo',
  ]),
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

PaymentCard.defaultProps = {
  bank: 'default',
  type: '',
  brand: 'mastercard',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
}

export default PaymentCard
