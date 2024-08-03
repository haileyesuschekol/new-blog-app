import { configureStore } from "@reduxjs/toolkit"
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carReducer,
} from "./slice/carSlice"

import { formReducer, changeCost, changeName } from "./slice/formSlice"

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
})

export { store, addCar, removeCar, changeSearchTerm, changeCost, changeName }
