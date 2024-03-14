import { createSlice } from "@reduxjs/toolkit";     // Import createSlide.

const initialState = {                              // Create reducer's initial state with 
    modules: [],
    module: { name: "New Module", description: "New Description" }     // Default module.
};

const modulesSlice = createSlice({ name: "modules", initialState,   // Create slice. Name the slice. Set initial state.
    reducers: {                                     // Declare reducer functions.
        setModules: (state, action) => {
            state.modules = action.payload;
        },      

        // addModule reducer function that appends new module at the beginning of modules state variable.
        addModule: (state, action) => {             // New module is in action.payload.
            state.modules = [action.payload, ...state.modules];
        },

        // deleteModule reducer function, action contains module's ID to filter out.
        deleteModule: (state, action) => {          // Module ID to delete is in action.payload.
            state.modules = state.modules.filter(   // Filter out module to delete.
            (module) => module._id !== action.payload
        );
        },

        // updateModule function, replacing old module in action.payload update modules.
        updateModule: (state, action) => {          // Module to update is in action.payload.
            // Replace module whose ID matches action.payload._id.
            state.modules = state.modules.map((module) => (module._id === action.payload._id ? action.payload : module));
            state.module = { name: "New Module", description: "New Description" };  // Clear module.
        },

        // setModule reducer function to update module state variable.
        setModule: (state, action) => {             // Select the module to edit.
            state.module = action.payload;
        },
    },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } = modulesSlice.actions;   // Export all reducer functions.
export default modulesSlice.reducer;                // Export reducer for store.