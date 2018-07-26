import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {ITEM_CLASS, SELECTED_CLASS} from './UnderlineNav'
import {spacing} from './mappers'

export default function UnderlineNavLink({children, selected, tag: Tag, ...rest}) {
  const {className} = spacing(rest)
  const classes = classnames(ITEM_CLASS, selected && SELECTED_CLASS, className)

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

UnderlineNavLink.defaultProps = {
  tag: 'a'
}

UnderlineNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}
