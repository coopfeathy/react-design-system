import React from 'react'
import PropTypes from 'prop-types'
import UnderlineNav, {ITEM_CLASS, SELECTED_CLASS} from '../UnderlineNav'
import {mount, render, renderClasses} from '../utils/testing'

const rendersClass = (node, klass) => renderClasses(node).includes(klass)

describe('Caret', () => {
  it('renders a <nav>', () => {
    expect(render(<UnderlineNav />).type).toEqual('nav')
  })

  it('adds the UnderlineNav class', () => {
    expect(rendersClass(<UnderlineNav />, 'UnderlineNav')).toEqual(true)
  })

  it('respects the "align" prop', () => {
    expect(rendersClass(<UnderlineNav align="right" />, 'UnderlineNav--right')).toEqual(true)
  })

  it('respects the "full" prop', () => {
    expect(rendersClass(<UnderlineNav full />, 'UnderlineNav--full')).toEqual(true)
  })

  it('sets aria-label to the "label" prop', () => {
    expect(render(<UnderlineNav label="foo" />).props['aria-label']).toEqual('foo')
  })

  it('wraps its children in an "UnderlineNav-body" div', () => {
    const children = <b>yo</b>
    const wrapper = mount(<UnderlineNav>{children}</UnderlineNav>)
    const body = wrapper.find('.UnderlineNav-body')
    expect(body.exists()).toEqual(true)
    expect(body.childAt(0).type()).toEqual('b')
  })

  it('respects the "actions" prop', () => {
    const content = <h1>hi!</h1>
    const wrapper = mount(<UnderlineNav actions={content} />)
    const actions = wrapper.find('.UnderlineNav-actions')
    expect(actions.exists()).toEqual(true)
    expect(actions.text()).toEqual('hi!')
  })

  it('adds the ITEM_CLASS to all children', () => {
    const wrapper = mount(
      <UnderlineNav>
        <a href="#foo">hi</a>
      </UnderlineNav>
    )
    expect(wrapper.find('a').props().className).toEqual(ITEM_CLASS)
  })

  it('adds activeClassName={SELECTED_CLASS} to anything that looks like a react-router NavLink', () => {
    function NavLink({activeClassName, ...rest}) {
      return <button data-active-class={activeClassName} {...rest} />
    }

    NavLink.propTypes = {
      activeClassName: PropTypes.string
    }

    const wrapper = mount(
      <UnderlineNav>
        <NavLink />
      </UnderlineNav>
    )
    expect(wrapper.find('button').props()).toEqual({
      className: ITEM_CLASS,
      'data-active-class': SELECTED_CLASS
    })
  })
})
