import { createSlice, nanoid } from "@reduxjs/toolkit"

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
    id: nanoid(),
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      state.cars.push(action.payload)
    },
    removeCar(state, action) {
      const update = state.cars.filter((car) => {
        return car.id !== action.payload
      })
      state.cars === update
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions
export const carReducer = carSlice.reducer
