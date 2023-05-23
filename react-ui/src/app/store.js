import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';
import selectedBreedsReducer from '../features/selectedBreedsSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    selectedBreeds: selectedBreedsReducer,
  }
});
