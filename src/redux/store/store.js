import { configureStore } from '@reduxjs/toolkit';

import locationsReducer from '../reducers/locations/locationsSlice';

const store = configureStore({
	reducer: {
		locations: locationsReducer,
	}
})

export default store;