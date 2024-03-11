import { configureStore } from "@reduxjs/toolkit";                  // Configure a new store.
import modulesReducer from "../Courses/Modules/modulesReducer";     // Import reducer.
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

export type AssignmentType = {
    _id: string, title: string, subtitle: string, description: string,
    dueDate: string, availableFromDate: string, untilDate: string, 
    points: string, course: string;
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
}

const store = configureStore({                                      // Add reducer to store.
    reducer: {
        modulesReducer, assignmentsReducer
    }
});
export default store;