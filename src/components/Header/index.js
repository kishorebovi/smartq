import React from 'react'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import { setSearchText } from '../../reducers/hotels'

import './index.scss'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div className="header">
      <div className="back-container">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </div>
      <div className="search-container">
        <input placeholder="Search..." onChange={(ev) => dispatch(setSearchText(ev.target.value))} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="search-icon"
        />
      </div>
    </div>
  )
}

export default Header
