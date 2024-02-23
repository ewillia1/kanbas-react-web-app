import { configureStore } from "@reduxjs/toolkit";                  // Configure a new store.
import modulesReducer from "../Courses/Modules/modulesReducer";     // Import reducer.

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
}

const store = configureStore({                                      // Add reducer to store.
    reducer: {
        modulesReducer
    }
});
export default store;