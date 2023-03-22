import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite = action.payload
    }
  }
})

export const { addFavorite } = favoriteSlice.actions

export const selectFavorite = (state) => state.favorite.favorite

export default favoriteSlice.reducer
