import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSelectedHotel } from '../../reducers/hotels'
import './index.scss'

const Sidebar = () => {
  const dispatch = useDispatch()
  const hotelsList = useSelector((state) => state.hotels.list)
  const selectedHotel = useSelector((state) => state.hotels.selectedHotel)

  return (
    <div className="sidebar">
      {hotelsList.map((ele) => (
        <div
          key={ele}
          className={ele === selectedHotel ? 'hotel-name active' : 'hotel-name'}
          onClick={() => dispatch(setSelectedHotel(ele))}
        >
          {ele}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
