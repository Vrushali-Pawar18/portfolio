import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SkillCategoryTab = 'all' | 'frontend' | 'backend' | 'databases' | 'ai' | 'cloud';

interface SkillState {
  activeTab: SkillCategoryTab;
  highlightedSkill: string | null;
}

const initialState: SkillState = {
  activeTab: 'all',
  highlightedSkill: null,
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<SkillCategoryTab>) => {
      state.activeTab = action.payload;
    },
    setHighlightedSkill: (state, action: PayloadAction<string | null>) => {
      state.highlightedSkill = action.payload;
    },
  },
});

export const { setActiveTab, setHighlightedSkill } = skillSlice.actions;

export default skillSlice.reducer;
