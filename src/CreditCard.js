import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './assets/main.scss'
import nubank from './assets/logos/nubank.png'

class CreditCard extends Component {
  constructor(props) {
    super(props)
    
    const logos = {
      nubank,
    }

    this.state = {
      flipped: false,
      logos,
      ...props,
    }
  }

  componentWillMount() {
    const bank = this.props.bank
    if (bank !== 'default' && !styles.hasOwnProperty(bank)) {
      throw new Error(`No styles for the Bank: ${this.props.bank}`)
    }
  }

  formatCardNumber(number) {
    return number.replace(/(\d{4})/g, '$1 ')
  }

  render() {
    const { bank, type, brand, logos } = this.state

    return (
      <div className={`${styles.card} ${styles[bank]} ${styles[type]}`}>
        <div className={styles.front}>
          <figure className={styles.figure}>
            <img className={styles.logo} alt={`Logo ${bank}.`} src={logos[bank]} />
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
          <div className={styles[brand]}>
            <span className={styles.name}></span>
          </div>
        </div>
        <div className="back"></div>
      </div>
    )
  }
}

CreditCard.propTypes = {
  bank: PropTypes.oneOf([
    'default',
    'nubank',
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
