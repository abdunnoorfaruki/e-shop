import {configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "./rootReduces";
export const store = configureStore({
    reducer:rootReducer
})