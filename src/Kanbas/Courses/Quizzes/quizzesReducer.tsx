import { createSlice } from "@reduxjs/toolkit";     // Import createSlide.

// TODO: Use database and not JSON file. quizzes needs to be empty by default!

export const initialState = {                               // Create reducer's initial state with 
    quizzes: [{
        _id: "", title: "", subtitle: "", 
        instructions: "", quizType: "", 
        assignmentGroup: "", shuffle: true, timeLimit: true, time: "", 
        multipleAttempts: false, showCorrectAnswers: true,
        showCorrectAnswersDate: "", hideCorrectAnswersDate: "", accessCodeOn: false, 
        accessCode: "", viewResponses: true,
        oneQuestion: true, webCam: false, lockedQuestions: false,
        forAccess: "", dueDate: "", availableFromDate: "", 
        untilDate: "", points: "", numQuestions: "", published: false
    }],                                       // default quizzes copied from database.
    quiz: {
        _id: "", title: "Unnamed Quiz", subtitle: "New Subtitle", 
        instructions: "<p><br></p>", quizType: "Graded Quiz", 
        assignmentGroup: "Quizzes", shuffle: true, timeLimit: true, time: "20", 
        multipleAttempts: false, showCorrectAnswers: true,
        showCorrectAnswersDate: "", hideCorrectAnswersDate: "", accessCodeOn: false, 
        accessCode: "", viewResponses: true,
        oneQuestion: true, webCam: false, lockedQuestions: false,
        forAccess: "Everyone", dueDate: "", availableFromDate: "", 
        untilDate: "", points: "0", numQuestions: "0", published: false
    }     // Default quiz.
};

const quizzesSlice = createSlice({ name: "quizzes", initialState,   // Create slice. Name the slice. Set initial state.
    reducers: {                                     // Declare reducer functions.
        selectQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        // addQuiz reducer function, action contains new quiz in action.payload. Overide _id as timestamp
        addQuiz: (state, action) => {             // New quiz is in action.payload.
            state.quizzes = [                     // Update quizzes in state adding new quiz at beginning of array. Update quizzes.
                { ...action.payload, _id: new Date().getTime().toString() },        // Override _id with timestamp.
                ...state.quizzes,
            ];
            console.log("ADDED QUIZ: state.quizzes = " + JSON.stringify(state.quizzes));
            state.quiz = {
                _id: "", title: "Unnamed Quiz", subtitle: "New Subtitle", 
                instructions: "<p><br></p>", quizType: "Graded Quiz", 
                assignmentGroup: "Quizzes", shuffle: true, timeLimit: true, time: "20", 
                multipleAttempts: false, showCorrectAnswers: true,
                showCorrectAnswersDate: "", hideCorrectAnswersDate: "", accessCodeOn: false, 
                accessCode: "", viewResponses: true,
                oneQuestion: true, webCam: false, lockedQuestions: false,
                forAccess: "Everyone", dueDate: "", availableFromDate: "", 
                untilDate: "", points: "0", numQuestions: "0", published: false
            };  // Clear quiz.
        },

        // deleteQuiz reducer function, action contains quiz's ID to filter out.
        deleteQuiz: (state, action) => {            // Assignment ID to delete is in action.payload.
            state.quizzes = state.quizzes.filter(   // Filter out quiz to delete.
                (quiz) => quiz._id !== action.payload
            );
        },

        // updateQuiz function, replacing old quiz in action.payload update quizzes.
        updateQuiz: (state, action) => {          // Quiz to update is in action.payload.
            // Replace quiz whose ID matches action.payload._id.
            state.quizzes = state.quizzes.map((quiz) => (quiz._id === action.payload._id ? action.payload : quiz));
            console.log("UPDATED QUIZ: state.quizzes = " + JSON.stringify(state.quizzes));
            state.quiz = { 
                _id: "", title: "Unnamed Quiz", subtitle: "New Subtitle", 
                instructions: "<p><br></p>", quizType: "Graded Quiz", 
                assignmentGroup: "Quizzes", shuffle: true, timeLimit: true, time: "20", 
                multipleAttempts: false, showCorrectAnswers: true,
                showCorrectAnswersDate: "", hideCorrectAnswersDate: "", accessCodeOn: false, 
                accessCode: "", viewResponses: true,
                oneQuestion: true, webCam: false, lockedQuestions: false,
                forAccess: "Everyone", dueDate: "", availableFromDate: "", 
                untilDate: "", points: "0", numQuestions: "0", published: false
            };  // Clear quiz.
        },

        // selectQuiz reducer function to update quiz state variable.
        selectQuiz: (state, action) => {             // Select the quiz to edit.
            state.quiz = action.payload;
        },
    },
});

export const { addQuiz, deleteQuiz, updateQuiz, selectQuiz, selectQuizzes } = quizzesSlice.actions;   // Export all reducer functions.
export default quizzesSlice.reducer;                // Export reducer for store.