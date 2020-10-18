import React from 'react'
import './styles.scss'

const ListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { renderItem } = props
  // eslint-disable-next-line react/prop-types
  const { label } = props.item

  // eslint-disable-next-line react/prop-types
  return <li>{renderItem ? renderItem(props.item) : label}</li>
}

const List = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, renderItem } = props

  return (
    <ul className="list">
      {/* eslint-disable-next-line react/prop-types */}
      {data.map((item) => {
        return <ListItem key={item.label} item={item} renderItem={renderItem} />
      })}
    </ul>
  )
}

export default List
