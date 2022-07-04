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
    },
})

export const {
    fetchLocations,
    addLocation,
    editLocation
} = locationsSlice.actions;

export default locationsSlice.reducer;