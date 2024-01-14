import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../components/nav/navSlice";
import portfolioSlice from "../components/content/portfolio/portfolioSlice";

const store = configureStore({
    reducer: {
        navSlice,
        portfolioSlice
    },
})

export default store;

