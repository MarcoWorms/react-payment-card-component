import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './assets/main.scss'

class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  componentWillMount() {
    const bank = this.props.bank
    if (bank != 'default' && !styles.hasOwnProperty(bank)) {
      throw new Error(`No styles for the Bank: ${this.props.bank}`)
    }
  }

  formatCardNumber(number) {
    return number.replace(/(\d{4})/g, '$1 ')
  }

  render() {
    const { bank, type } = this.props

    return (
      <div className={`${styles.card} ${styles[bank]} ${styles[type]}`}>
        <div className={styles.front}>
          <figure className={styles.figure}>
            <img className={styles.logo} />
          </figure>
          <div className={styles.chip}>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
          </div>
          <div className={styles.number}>
            {this.formatCardNumber(this.props.number)}
          </div>
          <div className={styles.date}>
            <span className={styles.expiration}>
              {this.props.expiration}
            </span>
          </div>
          <div className={styles.holderName}>
            {this.props.holderName}
          </div>
          <div className={styles.brand}></div>
        </div>
        <div className="back"></div>
      </div>
    )
  }
}

CreditCard.propTypes = {
  bank: PropTypes.oneOf([
    'default'
  ]).isRequired,
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard'
  ]).isRequired,
  type: PropTypes.string,
  number: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
}

CreditCard.defaultProps = {
  bank: 'default',
  number: '•••• •••• •••• ••••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA'
}

export default CreditCard
