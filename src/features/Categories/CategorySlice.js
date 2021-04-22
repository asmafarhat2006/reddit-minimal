import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create loadSubreddits here.
export const loadCategoriesData = createAsyncThunk(
    'categories/loadCategoriesData',
    async () => {

      const response = await fetch(`https://www.reddit.com/subreddits.json`);
      const json = await response.json();
      console.log(json);
      return json;
    }
  )
  export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
      categoryData : null,
      isLoadingData: false,
      failedToLoadData: false,
      // Add initial state properties here.
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadCategoriesData.pending, (state) => {
          state.isLoadingData = true;
          state.failedToLoadData = false;
        })
        .addCase(loadCategoriesData.fulfilled, (state, action) => {
          state.isLoadingData = false;
          state.categoryData = action.payload.data.children.map((child)=>child.data)
        })
        .addCase(loadCategoriesData.rejected, (state, action) => {
          state.isLoadingData = false;
          state.failedToLoadData = true;
        
        })
       
       
    }
    // Add extraReducers here.
  });
  
  export const selectCategoriesData= (state) => state.categories.categoryData;
  export const selectIsLoadingData = (state) => state.categories.isLoadingData;

  export default categorySlice.reducer;