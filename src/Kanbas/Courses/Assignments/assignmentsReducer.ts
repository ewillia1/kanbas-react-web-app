import { createSlice } from "@reduxjs/toolkit";     // Import createSlide.
import { assignments } from "../../Database";           // Import assignments from database.

const initialState = {                              // Create reducer's initial state with 
    assignments: assignments,                               // default assignments copied from database.
    assignment: { title: "New Title", subtitle: "New Subtitle", dueDate: "2024-09-19", 
                  availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100" }     // Default assignment.
};

const assignmentsSlice = createSlice({ name: "assignments", initialState,   // Create slice. Name the slice. Set initial state.
    reducers: {                                     // Declare reducer functions.

        // addAssignment reducer function, action contains new assignment in action.payload. Overide _id as timestamp
        addAssignment: (state, action) => {             // New assignment is in action.payload.
            state.assignments = [                       // Update assignments in state adding new assignment at beginning of array. Update assignments.
                { ...action.payload, _id: new Date().getTime().toString() },        // Override _id with timestamp.
                ...state.assignments,
            ];
            state.assignment = { title: "New Title", subtitle: "New Subtitle", dueDate: "2024-09-19", 
                                 availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100" };  // Clear assignment.
        },

        // deleteAssignment reducer function, action contains assignment's ID to filter out.
        deleteAssignment: (state, action) => {          // Module ID to delete is in action.payload.
            state.assignments = state.assignments.filter(   // Filter out assignment to delete.
            (assignment) => assignment._id !== action.payload
        );
        },

        // updateAssignment function, replacing old assignment in action.payload update assignments.
        updateAssignment: (state, action) => {          // Module to update is in action.payload.
            // Replace assignment whose ID matches action.payload._id.
            state.assignments = state.assignments.map((assignment) => (assignment._id === action.payload._id ? action.payload : assignment));
            state.assignment = { title: "New Title", subtitle: "New Subtitle", dueDate: "2024-09-19", 
                                 availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100" };  // Clear assignment.
        },

        // setModule reducer function to update assignment state variable.
        selectAssignment: (state, action) => {             // Select the assignment to edit.
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;   // Export all reducer functions.
export default assignmentsSlice.reducer;                // Export reducer for store.