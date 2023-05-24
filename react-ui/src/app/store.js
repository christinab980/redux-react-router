import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';
// import subBreedsReducer from '..features/breedsSlice';
import selectedBreedsReducer from '../features/selectedBreedsSlice';

export default configureStore({
  reducer: {
    breeds: breedsReducer,
    // breedsWithSubbreeds: subBreedsReducer,
    selectedBreeds: selectedBreedsReducer,
  }
});
