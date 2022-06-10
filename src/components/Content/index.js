import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setItemAvailability } from '../../reducers/hotels'

import './index.scss'

const Card = ({ item }) => {
  const selectedHotel = useSelector((state) => state.hotels.selectedHotel)
  const dispatch = useDispatch()

  const changeItemAvailability = () => {
    const payload = {
      hotel: selectedHotel,
      id: item.foodid,
      status: !item.outofstock,
    }
    dispatch(setItemAvailability(payload))
  }

  return (
    <div
      className={item.outofstock ? 'card no-stock' : 'card stock'}
      onClick={changeItemAvailability}
    >
      <div className="text-container">{item.foodname}</div>
    </div>
  )
}

const Content = () => {
  const selectedHotel = useSelector((state) => state.hotels.selectedHotel)
  const searchText = useSelector((state) => state.hotels.searchText)
  const menuItems = useSelector(
    (state) => state.hotels.menuItems[selectedHotel]
  )

  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    let list = menuItems?.filter((ele) =>
      ele?.foodname.toLowerCase().includes(searchText.toLowerCase())
    )

    setFilteredList(list)
  }, [menuItems, searchText])

  return (
    <div className="content">
      {filteredList?.map((ele) => (
        <Card key={ele.foodid} item={ele} />
      ))}
    </div>
  )
}

export default Content
