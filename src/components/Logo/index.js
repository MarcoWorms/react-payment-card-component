import React from 'react'
import PropTypes from 'prop-types'
import bankLogos from './images/banks'
import brandLogos from './images/brands'
import './style.css'

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const Logo = ({
  bank,
  type,
  brand,
  className,
}) => {
  const logoSrc = bankLogos[`${bank}${capitalize(type)}`] || brandLogos[brand]

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
