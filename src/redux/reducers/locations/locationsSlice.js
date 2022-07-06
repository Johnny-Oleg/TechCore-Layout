import { createSlice } from '@reduxjs/toolkit';

const findMaxId = state => {
    const maxId = state.locations.reduce((maxId, loc) => Math.max(loc.id, maxId), -1);

    return maxId + 1;
}

export const locationsSlice = createSlice({
    name: 'locations',
    initialState: {
        locations: [],
    },
    reducers: {
        fetchLocations: (state, action) => {
            state.locations = [...state.locations, ...action.payload];
        },
        setStatusLocation: (state, action) => {
            state.locations = [...state.locations]
                .map(loc => loc.id === action.payload ?
                    { ...loc, default: !loc.default } : loc
                )
        },
		deleteLocation: (state, action) => {
			state.locations = [...state.locations
				.filter(loc => loc.id !== action.payload)];
		}
    },
})

export const {
    fetchLocations,
    addLocation,
    editLocation,
    setStatusLocation,
	deleteLocation,
} = locationsSlice.actions;

export default locationsSlice.reducer;