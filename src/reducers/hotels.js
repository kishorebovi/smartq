import { createSlice } from '@reduxjs/toolkit'

export const hotelsSlice = createSlice({
	name: 'hotels',
	initialState: {
		list: [],
		menuItems: {

		},
		searchText: '',
		selectedHotel: ''
	},
	reducers: {
		setHotelsList: (state, action) => {
			state.list = action.payload
		},
		setMenuItems: (state, action) => {
			const {hotel, data} = action.payload
			state.menuItems[hotel] = data
		},
		setItemAvailability: (state, action) => {
			const {hotel, id, status} = action.payload
			const index = state.menuItems[hotel].findIndex((ele) => ele.foodid === id)
			state.menuItems[hotel][index].outofstock = status
		},
		setAllItemsAvailability: (state, action) => {
			const {hotel, status} = action.payload
			state.menuItems[hotel] = state.menuItems[hotel].map((ele) => {
				ele.outofstock = status

				return ele
			})
		},
		setSelectedHotel: (state, action) => {
			state.selectedHotel = action.payload
		},
		setSearchText: (state, action) => {
			state.searchText = action.payload
		}
	}
})

export const {
	setHotelsList,
	setMenuItems,
	setItemAvailability,
	setAllItemsAvailability,
	setSelectedHotel,
	setSearchText
} = hotelsSlice.actions

export default hotelsSlice.reducer