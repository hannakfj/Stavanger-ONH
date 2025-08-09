import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LanguageState = {
  language: "no" | "en";
};

const initialState: LanguageState = {
  language: "no",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageState["language"]>) => {
      state.language = action.payload;
    },
    toggleLanguage: (state) => {
      state.language = state.language === "no" ? "en" : "no";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
