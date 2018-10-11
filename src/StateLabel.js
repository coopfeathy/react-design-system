import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import theme, {colors} from './theme'
import {withSystemProps, COMMON} from './system-props'
import Box from  './Box'
import Octicon from './Octicon'

const schemeMap = {
  red: colors.red[6],
  yellow: colors.yellow[7],
  purple: colors.purple[5],
  green: '#2cbe4e', // This was generated by a sass function in Primer, so using a hex here
  gray: colors.gray[5]
}

const getOcticon = (icon, small) =>
  small ? <Octicon mr={1} width='1em' icon={icon} /> : <Octicon mr={1} icon={icon} />

function StateLabel({className, icon, scheme, small = false, children}) {
  return (
    <span className={className}>
      {icon && getOcticon(icon, small)}
      {children}
    </span>
  )
}

const styledLabel = styled(StateLabel)`
  display: inline-flex;
  align-items: center;
  padding: ${props => (props.small ? `0.125em ${theme.space[1]}px` : `${theme.space[1]}px ${theme.space[2]}px`)};
  font-weight: 600;
  line-height: 20px;
  color: ${colors.white};
  font-size: ${props => (props.small ? `${theme.fontSizes[0]}px` : `${theme.fontSizes[1]}px`)};
  text-align: center;
  background-color: ${props => (props.scheme ? schemeMap[props.scheme] : schemeMap.gray)};
  border-radius: 3px;
`

StateLabel.propTypes = {
  icon: PropTypes.node,
  scheme: PropTypes.oneOf('red', 'yellow', 'purple', 'green', 'gray'),
  small: PropTypes.bool,
}

export default withSystemProps(styledLabel, COMMON)
