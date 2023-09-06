import {configureStore} from "@reduxjs/toolkit";
import {FormSlice} from "@/store/features/FormSlice.ts";

export const store = configureStore({
    reducer: {
        formState: FormSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
