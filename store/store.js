import { configureStore } from '@reduxjs/toolkit';
import { schoolData } from '../features/schoolDetails/getSchoolData';

 const store = configureStore({
  reducer: {
    schoolDetails: schoolData
  },
})
export default store;