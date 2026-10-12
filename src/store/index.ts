import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import projectReducer from './slices/projectSlice';
import skillReducer from './slices/skillSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectReducer,
    skills: skillReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
