import React from 'react'
import PropTypes from 'prop-types'
import {MergeStatus, PointerBox} from '../../src'
import MergeDetail from './MergeDetail'
import MergeActions from './MergeActions'

const stateColorMap = {
  ready: 'green.5',
  invalid: 'invalid',
  merged: 'purple.5',
  pending: 'yellow.7'
}

function getDesktopURL(repoUrl, branchName) {
  return `x-github-client://openRepo/${repoUrl}?branch=${branchName}`
}

const MergeBox = ({state, repoUrl, branchName, numCommits, onMerge}) => {
  const borderColor = stateColorMap[state]
  return (
    <div className="d-flex flex-items-start">
      <MergeStatus state={state} />
      <PointerBox ml={3} borderColor={borderColor} caret="left-top">
        <MergeDetail state={state} borderColor={borderColor} borderBottom={1} />
        <MergeActions
          state={state}
          numCommits={numCommits}
          desktopUrl={getDesktopURL(repoUrl, branchName)}
          onClick={onMerge}
        />
      </PointerBox>
    </div>
  )
}

MergeBox.propTypes = {
  branchName: PropTypes.string.isRequired,
  numCommits: PropTypes.number.isRequired,
  onMerge: PropTypes.func.isRequired,
  repoUrl: PropTypes.string.isRequired,
  state: PropTypes.oneOf(Object.keys(stateColorMap)).isRequired
}

export default MergeBox
