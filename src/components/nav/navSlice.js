import { createSlice } from "@reduxjs/toolkit";
import { home, resume, work, contacts, homeActive, resumeActive, workActive, contactsActive } from "../../images/images";

const initialState = {
    data: [
        { svg: home, svgActive: homeActive, descr: "Home", active: true },
        { svg: resume, svgActive: resumeActive, descr: "Resume", active: false },
        { svg: work, svgActive: workActive, descr: "Work", active: false },
        { svg: contacts, svgActive: contactsActive, descr: "Contact", active: false },
    ],
    activeState: 0,
}

const navSlice = createSlice({
    name: "filtersNav",
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

const { actions, reducer } = navSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;