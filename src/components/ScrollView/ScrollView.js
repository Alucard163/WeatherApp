import React from 'react'
import './styles.scss'

const ScrollView = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className="scroller">{props.children}</div>
}

export default ScrollView
