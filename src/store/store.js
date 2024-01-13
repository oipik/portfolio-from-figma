import { configureStore } from "@reduxjs/toolkit";
import filters from "../components/header/filterSlice";

const store = configureStore({
    reducer: filters
})

export default store;