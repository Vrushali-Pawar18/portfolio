import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProjectFilterCategory = 'all' | 'fullstack' | 'frontend' | 'ai';

interface ProjectState {
  selectedCategory: ProjectFilterCategory;
  searchQuery: string;
  activeModalProjectId: string | null;
  bookmarkedIds: string[];
}

const initialState: ProjectState = {
  selectedCategory: 'all',
  searchQuery: '',
  activeModalProjectId: null,
  bookmarkedIds: [],
};

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ProjectFilterCategory>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    openCaseStudyModal: (state, action: PayloadAction<string>) => {
      state.activeModalProjectId = action.payload;
    },
    closeCaseStudyModal: (state) => {
      state.activeModalProjectId = null;
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.bookmarkedIds.includes(id)) {
        state.bookmarkedIds = state.bookmarkedIds.filter((item) => item !== id);
      } else {
        state.bookmarkedIds.push(id);
      }
    },
  },
});

export const {
  setCategory,
  setSearchQuery,
  openCaseStudyModal,
  closeCaseStudyModal,
  toggleBookmark,
} = projectSlice.actions;

export default projectSlice.reducer;
