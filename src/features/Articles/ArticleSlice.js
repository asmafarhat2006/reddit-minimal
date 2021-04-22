import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create loadRedditLatestData here.
export const loadArticleData = createAsyncThunk(
    'article/loadArticleData',
    async (caturl) => {
      const response = await fetch(`https://www.reddit.com${caturl}.json`);
      const json = await response.json();
      console.log(json);
      return json;
    }
  )
  export const loadArticleDataBySearchTerm = createAsyncThunk(
    'article/loadArticleDataBySearchTerm',
    async (searchterm) => {
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchterm}`);
      const json = await response.json();
      console.log(json);
      return json;
    }
  )
 
 
  export const articleSlice = createSlice({
    name: 'articles',
    initialState: {
      articleData : {posts:[]},
      isLoadingData: false,
      failedToLoadData: false,
      // Add initial state properties here.
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadArticleData.pending, (state) => {
          state.isLoadingData = true;
          state.failedToLoadData = false;
        })
        .addCase(loadArticleData.fulfilled, (state, action) => {
          state.isLoadingData = false;
          state.articleData.posts = action.payload.data.children.map((child)=>{
            return child.data;
          })
          const postsWithMetadata = state.articleData.posts.map((post) => ({
            ...post,
            comments: [],
            }));
            state.articleData.posts = postsWithMetadata;
        })
        .addCase(loadArticleData.rejected, (state, action) => {
          state.isLoadingData = false;
          state.failedToLoadData = true;
        
        })
        builder
        .addCase(loadArticleDataBySearchTerm.pending, (state) => {
          state.isLoadingData = true;
          state.failedToLoadData = false;
        })
        .addCase(loadArticleDataBySearchTerm.fulfilled, (state, action) => {
          state.isLoadingData = false;
          state.articleData.posts = action.payload.data.children.map((child)=>child.data);
          
          const postsWithMetadata = state.articleData.posts.map((post) => ({
            ...post,
            comments: [],
            }));
            state.articleData.posts = postsWithMetadata;
        
        })
        .addCase(loadArticleDataBySearchTerm.rejected, (state, action) => {
          state.isLoadingData = false;
          state.failedToLoadData = true;
        
        })
        /*
        .addCase(loadCommentsData.pending, (state) => {
          state.isLoadingData = true;
          state.failedToLoadData = false;
        })
        .addCase(loadCommentsData.fulfilled, (state, action) => {
          state.isLoadingData = false;
          const index = state.articleData.posts.findIndex(function(post) {
            return post.name == action.payload[1].data.children[action.payload[1].data.children.length-1].name;
          });
          state.articleData.posts[index].comments = action.payload[1].data.children.map((child)=>child.data);
        })
        .addCase(loadCommentsData.rejected, (state, action) => {
          state.isLoadingData = false;
          state.failedToLoadData = true;
        
        })
       */
       
       
    }
    // Add extraReducers here.
  });
  
  export const selectArticlesData= (state) => state.articles.articleData;
  export const selectIsLoadingData = (state) => state.articles.isLoadingData;

  export default articleSlice.reducer;