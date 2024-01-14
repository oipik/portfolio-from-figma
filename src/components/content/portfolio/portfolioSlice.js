import { createSlice } from "@reduxjs/toolkit";

import { smartBankApp, blog, uiUx, mentorship, web } from "../../../images/images";

const initialState = {
    portfolio: [
        { src: smartBankApp, way: "App Development", project: "Smart Bank App" },
        { src: blog, way: "Design", project: "NEXT.js" },
        { src: uiUx, way: "Design", project: "Rental" },
        { src: mentorship, way: "Mentorship", project: "Tech Mentor" },
        { src: web, way: "Web Development", project: "IdeaFlow" },
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