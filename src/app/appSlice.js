import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as actions from './action'
export const appSlice = createSlice({
    name: 'app',
    initialState: {
      isShowCart: false
    },
    reducers: {
      showCart: (state) => {
        state.isShowCart = state.isShowCart === false ? true : false
      }
    },
})
export const { showCart } = appSlice.actions
export default appSlice.reducer 