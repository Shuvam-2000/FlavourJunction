import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./AddToCart"

export const cartStore = configureStore({
    reducer: {
        cart: addToCart // naming based on the Cart Store
    }
})