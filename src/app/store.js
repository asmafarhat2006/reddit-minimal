import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/Articles/ArticleSlice';
import categoriesReducer from '../features/Categories/CategorySlice';
export default configureStore({
  reducer: {
    articles : articlesReducer,
    categories : categoriesReducer,
  },
});
