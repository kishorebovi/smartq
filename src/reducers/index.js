import { configureStore } from '@reduxjs/toolkit';
import holetsReducer from './hotels.js'

export default configureStore({
	reducer: {
		hotels: holetsReducer
	}
})