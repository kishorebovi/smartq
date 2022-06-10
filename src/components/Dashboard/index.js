import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MenuData from '../../static/menu.json'

import {
  setHotelsList,
  setSelectedHotel,
  setMenuItems,
} from '../../reducers/hotels'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import Footer from '../Footer'
import './index.scss'

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    let hotelsList = Object.keys(MenuData.menuDetails)

    console.log('hotels list === ', hotelsList)

    dispatch(setHotelsList(hotelsList))
    dispatch(setSelectedHotel(hotelsList[0]))

    hotelsList.map((ele) => {
      let payload = {
        hotel: ele,
        data: MenuData.menuDetails[ele]
      }
      dispatch(setMenuItems(payload))
      return null
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="dashboard">
      <div className="header-container">
        <Header />
      </div>
      <div className="body">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
      <div className='footer' >
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
