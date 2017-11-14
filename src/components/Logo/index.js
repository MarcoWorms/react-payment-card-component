import React from 'react'
import PropTypes from 'prop-types'
import bankLogos from './images/banks'
import brandLogos from './images/brands'
import typeLogos from './images/types'
import './style.css'

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const getLogo = (className, sourceName, brandName) => {
  if (className === 'brandLogo') {
    return brandLogos[brandName]
  }

  if (className === 'bankLogo') {
    return bankLogos[sourceName]
  }

  if (className === 'typeLogo') {
    return typeLogos[sourceName]
  }

  return ''
}

const capitalizeType = (type) => {
  if (!type) return ''

  const names = type.split('-')

  if (names.length > 1) {
    return names.map(capitalize).join('')
  }

  return capitalize(type)
}

const Logo = ({
  bank,
  type,
  brand,
  className,
}) => {
  const bankWithType = `${bank}${capitalizeType(type)}`
  const logoSrc = getLogo(className, bankWithType, brand)

  if (!logoSrc) {
    return ''
  }

  return (
    <img src={logoSrc} alt={bank} className={className} />
  )
}

Logo.propTypes = {
  bank: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  className: PropTypes.string,
}

Logo.defaultProps = {
  bank: 'default',
  type: '',
  brand: '',
  className: PropTypes.string,
}

export default Logo
