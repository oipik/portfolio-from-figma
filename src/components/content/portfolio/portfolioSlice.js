import { createSlice } from "@reduxjs/toolkit";

import { smartBankApp, blog, uiUx, mentorship, web } from "../../../images/images";

const initialState = {
    portfolio: [
        { src: smartBankApp, way: "App Development", project: "Smart Bank App", id: 1 },
        { src: blog, way: "Design", project: "NEXT.js", id: 2 },
        { src: uiUx, way: "Design", project: "Rental", id: 3 },
        { src: mentorship, way: "Mentorship", project: "Tech Mentor", id: 4 },
        { src: web, way: "Web Development", project: "IdeaFlow", id: 5 },
    ],
    active: "All",
}

const portfolioSlice = createSlice({
    name: "portfolioFilter",
    initialState,
    reducers: {
        activeFilterState: (state, action) => {
            state.active = action.payload;
        }
    }
})

const { actions, reducer } = portfolioSlice;

export const { activeFilterState } = actions;

export default reducer;