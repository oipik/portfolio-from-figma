import { createSlice } from "@reduxjs/toolkit";
import { home, resume, work, contacts, homeActive, resumeActive, workActive, contactsActive } from "../../images/images";

const initialState = {
    data: [
        { svg: home, to: "about", svgActive: homeActive, descr: "Home", active: false, id: 1 },
        { svg: resume, to: "resume", svgActive: resumeActive, descr: "Resume", active: false, id: 2 },
        { svg: work, to: "portfolio", svgActive: workActive, descr: "Work", active: false, id: 3 },
        { svg: contacts, to: "contacts", svgActive: contactsActive, descr: "Contacts", active: false, id: 4 },
    ],
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
        }
    }
})

const { actions, reducer } = navSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;