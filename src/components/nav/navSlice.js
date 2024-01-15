import { createSlice } from "@reduxjs/toolkit";
import { home, resume, work, contacts, homeActive, resumeActive, workActive, contactsActive } from "../../images/images";

const initialState = {
    data: [
        { svg: home, svgActive: homeActive, descr: "Home", active: true, id: 1 },
        { svg: resume, svgActive: resumeActive, descr: "Resume", active: false, id: 2 },
        { svg: work, svgActive: workActive, descr: "Work", active: false, id: 3 },
        { svg: contacts, svgActive: contactsActive, descr: "Contact", active: false, id: 4 },
    ],
    activeState: 1,
}

const navSlice = createSlice({
    name: "filtersNav",
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.data = state.data.map((item) => {
                if (action.payload === item.id) {
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