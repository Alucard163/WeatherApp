import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const BackButton = () => {
  return (
    <Link to="/#" className="button">
      Назад
    </Link>
  )
}

export default BackButton
