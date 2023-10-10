import { createSlice } from '@reduxjs/toolkit';

const totalLikesSlice = createSlice({
  name: 'totalLikes',
  initialState: {
    totalLikes: 0, // Initial total likes value
  },
  reducers: {
    setTotalLikesReducer: (state, action) => {
      // Update the total likes value in the state
      state.totalLikes = action.payload;
    },
  },
});

export const { setTotalLikesReducer } = totalLikesSlice.actions;

export default totalLikesSlice.reducer;




