/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Avatar from '../Avatar'
import {render, renderClasses} from '../utils/testing'

describe('Avatar', () => {
  it('renders small by default', () => {
    expect(renderClasses(<Avatar />)).toContain("avatar-small")
  })

  it('respects the size prop', () => {
    expect(render(<Avatar size={40} alt="github" />)).toMatchSnapshot()
  })

  it('respects isChild', () => {
    expect(renderClasses(<Avatar isChild />)).toContain("avatar-child")
  })

  it('passes through the src prop', () => {
    expect(render(<Avatar src="primer.png" />)).toMatchSnapshot()
  })

  xit('respects margin utility prop', () => {
    expect(rendersClass(<Avatar m={1} />, 'm-1')).toEqual(true)
  })

  xit('respects padding utility prop', () => {
    expect(rendersClass(<Avatar p={1} />, 'p-1')).toEqual(true)
  })
})
