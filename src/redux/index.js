import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";


const reducers = combineReducers({
    auth: authSliceReducer,
    houses: authSliceReducer
})

export const store = configureStore({
    reducer: reducers
})

store.subscribe(() => {
    const auth = store.getState().auth
    console.log(auth);
    localStorage.setItem("auth", JSON.stringify(auth))
})

console.log(store);