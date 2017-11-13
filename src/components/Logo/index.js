import React from 'react'
import PropTypes from 'prop-types'

import bankLogos from './images/banks'
import './style.css'

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const Logo = ({
  bank,
  type,
}) => {
  const logoPath = bankLogos[`${bank}${capitalize(type)}`]

  if (!logoPath) {
    return ''
  }

  return (
    <img src={logoPath} alt={bank} className="logo" />
  )
}

Logo.propTypes = {
  bank: PropTypes.string,
  type: PropTypes.string,
}

Logo.defaultProps = {
  bank: 'default',
  type: '',
}

export default Logo
