import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
  id: number;
}

interface UiState {
  activeSection: string;
  mobileMenuOpen: boolean;
  toast: ToastState | null;
  resumeDownloadCount: number;
}

const initialState: UiState = {
  activeSection: 'hero',
  mobileMenuOpen: false,
  toast: null,
  resumeDownloadCount: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    showToast: (state, action: PayloadAction<{ message: string; type?: 'success' | 'info' | 'error' }>) => {
      state.toast = {
        message: action.payload.message,
        type: action.payload.type || 'info',
        id: Date.now(),
      };
    },
    clearToast: (state) => {
      state.toast = null;
    },
    incrementResumeDownload: (state) => {
      state.resumeDownloadCount += 1;
    },
  },
});

export const {
  setActiveSection,
  toggleMobileMenu,
  setMobileMenuOpen,
  showToast,
  clearToast,
  incrementResumeDownload,
} = uiSlice.actions;

export default uiSlice.reducer;
