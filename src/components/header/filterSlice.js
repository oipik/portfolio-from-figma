import { createSlice } from "@reduxjs/toolkit";
import { data } from "../nav/Nav";


const initialState = {
    data,
    activeState: 0,
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.data = state.data.map((item, i) => {
                if (action.payload === i) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });
            state.activeState = action.payload;
        }
    }
})

const { actions, reducer } = filterSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;