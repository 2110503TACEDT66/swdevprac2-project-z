import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key: "rootPersist",
    storage: storage,
    timeout: 5000
}

const rootReducer= combineReducers({bookSlice})
const reduxPersistedReducer= persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: reduxPersistedReducer
    // {bookSlice}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector