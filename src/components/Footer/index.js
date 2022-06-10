import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setAllItemsAvailability } from '../../reducers/hotels'
import './index.scss'

const Footer = () => {
  const dispatch = useDispatch()
  const selectedHotel = useSelector((state) => state.hotels.selectedHotel)

  const onAvailabilityChange = (status) => {
    const payload = {
      hotel: selectedHotel,
      status,
    }
    dispatch(setAllItemsAvailability(payload))
  }
  return (
    <div className="footer">
      <button onClick={() => onAvailabilityChange(true)} >All Unavailable</button>
      <button onClick={() => onAvailabilityChange(false)} >All Available</button>
      <button>Apply</button>
    </div>
  )
}

export default Footer
