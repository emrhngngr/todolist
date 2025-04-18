import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../todo/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    }); 