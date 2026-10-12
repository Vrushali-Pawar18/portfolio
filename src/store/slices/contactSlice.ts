import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactState {
  formData: ContactFormData;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage: string | null;
}

const initialState: ContactState = {
  formData: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  status: 'idle',
  errorMessage: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormData; value: string }>
    ) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    setSubmitting: (state) => {
      state.status = 'submitting';
      state.errorMessage = null;
    },
    setSubmitSuccess: (state) => {
      state.status = 'success';
      state.formData = { name: '', email: '', subject: '', message: '' };
      state.errorMessage = null;
    },
    setSubmitError: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.errorMessage = action.payload;
    },
    resetContactStatus: (state) => {
      state.status = 'idle';
      state.errorMessage = null;
    },
  },
});

export const {
  updateField,
  setSubmitting,
  setSubmitSuccess,
  setSubmitError,
  resetContactStatus,
} = contactSlice.actions;

export default contactSlice.reducer;
