import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { scannerReducer } from "./feature/scannerSlice";


  
const rootReducers = combineReducers({
    scannerReducer,
 

})

export const store = configureStore({
    reducer: rootReducers,
});

