import {createSlice} from "@reduxjs/toolkit";

const teameSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: true,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
})

export const {toggleTheme} = teameSlice.actions;
export default teameSlice.reducer;