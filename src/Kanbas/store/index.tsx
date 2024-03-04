import { configureStore } from "@reduxjs/toolkit";                  // Configure a new store.
import modulesReducer from "../Courses/Modules/modulesReducer";     // Import reducer.
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import quizzesReducer from "../Courses/Quizzes/quizzesReducer";

export type AssignmentType = {
    _id: string, title: string, subtitle: string, description: string,
    dueDate: string, availableFromDate: string, untilDate: string, 
    points: string, course: string;
};

export type QuizType = {
    _id: string, title: string, subtitle: string, description: string, forAccess: string,
    dueDate: string, availableFromDate: string, untilDate: string, 
    points: string, numQuestions: string, availability: boolean, 
    published: boolean, course: string;
};

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };

    assignmentsReducer: {
        assignments: AssignmentType[];
        assignment: AssignmentType;
    };

    quizzesReducer: {
        quizzes: QuizType[];
        quiz: QuizType;
    }
}

const store = configureStore({                                      // Add reducer to store.
    reducer: {
        modulesReducer, assignmentsReducer, quizzesReducer
    }
});
export default store;