import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type FormStateObject = {
    [key: string]: never;
}

interface FormStateProps {
    formState: FormStateObject;
}

const initialState: FormStateProps = {
    formState: {}
}

export const FormSlice = createSlice({
    name: 'formState',
    initialState,
    reducers: {
        setFormState: (state, action: PayloadAction<FormStateObject>) => {
            const {key, value} = action.payload;

            state.formState = {
                ...state.formState,
                [key]: value
            }
        }
    }
})

export const {setFormState} = FormSlice.actions;
export default FormSlice.reducer;

