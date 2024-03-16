import { createSlice } from "@reduxjs/toolkit";     // Import createSlide.
import { quizzes } from "../../Database";           // Import quizzes from database.

// TODO: Use database and not JSON file. quizzes needs to be empty by default!

// TODO: Availability: Closed, Available, Not Available.

export const initialState = {                               // Create reducer's initial state with 
    quizzes: quizzes,                                       // default quizzes copied from database.
    quiz: { 
        title: "Unnamed Quiz", subtitle: "New Subtitle", description: "", 
        forAccess: "Everyone", dueDate: "", availableFromDate: "", 
        untilDate: "", points: "0", published: "", course: ""
    }     // Default quiz.
};

const quizzesSlice = createSlice({ name: "quizzes", initialState,   // Create slice. Name the slice. Set initial state.
    reducers: {                                     // Declare reducer functions.

        // addQuiz reducer function, action contains new quiz in action.payload. Overide _id as timestamp
        addQuiz: (state, action) => {             // New quiz is in action.payload.
            state.quizzes = [                     // Update quizzes in state adding new quiz at beginning of array. Update quizzes.
                { ...action.payload, _id: new Date().getTime().toString() },        // Override _id with timestamp.
                ...state.quizzes,
            ];
            state.quiz = { 
                title: "Unnamed Quiz", subtitle: "New Subtitle", description: "", 
                forAccess: "Everyone", dueDate: "", availableFromDate: "", 
                untilDate: "", points: "0", published: "", course: ""
            };  // Clear quiz.
        },

        // deleteQuiz reducer function, action contains quiz's ID to filter out.
        deleteQuiz: (state, action) => {            // Assignment ID to delete is in action.payload.
            console.log("In deleteQuiz");
            state.quizzes = state.quizzes.filter(   // Filter out quiz to delete.
                (quiz) => quiz._id !== action.payload
            );
            console.log(state);
        },

        // updateQuiz function, replacing old quiz in action.payload update quizzes.
        updateQuiz: (state, action) => {          // Quiz to update is in action.payload.
            // Replace quiz whose ID matches action.payload._id.
            state.quizzes = state.quizzes.map((quiz) => (quiz._id === action.payload._id ? action.payload : quiz));
            state.quiz = { 
                title: "Unnamed Quiz", subtitle: "New Subtitle", description: "", 
                forAccess: "Everyone", dueDate: "", availableFromDate: "", 
                untilDate: "", points: "0", published: "", course: ""
            };  // Clear quiz.
        },

        // selectQuiz reducer function to update quiz state variable.
        selectQuiz: (state, action) => {             // Select the quiz to edit.
            state.quiz = action.payload;
        },
    },
});

export const { addQuiz, deleteQuiz, updateQuiz, selectQuiz } = quizzesSlice.actions;   // Export all reducer functions.
export default quizzesSlice.reducer;                // Export reducer for store.