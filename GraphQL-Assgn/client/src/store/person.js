import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  dataFetched: false,
};

export const counterSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setDataFetched: (state) => {
      state.dataFetched = true;
    },
    setPerson: (state, action) => {
      state.persons = action.payload;
    },
    addPerson: (state, action) => {
      state.persons.push(action.payload);
    },
    removePerson: (state, action) => {
      state.persons = state.persons.filter(
        (person) => person.id !== action.payload
      );
    },
    updatePerson: (state, action) => {
      state.persons = state.persons.map((person) => {
        if (person.id === action.payload.id) {
          return action.payload;
        }
        return person;
      });
    },
    addCar: (state, action) => {
      state.persons.forEach((person) => {
        if (person.id === action.payload.personId) {
          person.cars.push(action.payload);
        }
      });
    },
    removeCar: (state, action) => {
      state.persons.forEach((person) => {
        if (person.id === action.payload.personId) {
          person.cars = person.cars.filter(
            (car) => car.id !== action.payload.carId
          );
        }
      });
    },
    moveCarToPerson: (state, action) => {
      let movedCar = null;
      state.persons.forEach((person) => {
        if (person.id === action.payload.oldPersonId) {
          person.cars = person.cars.filter((car) => {
            if (car.id !== action.payload.carId) {
              return true;
            } else {
              movedCar = car;
              return false;
            }
          });
        }
      });
      state.persons.forEach((person) => {
        if (person.id === action.payload.newPersonId) {
          person.cars.push(movedCar);
        }
      });
    },
    updateCar: (state, action) => {
      state.persons.forEach((person) => {
        if (person.id === action.payload.personId) {
          person.cars = person.cars.map((car) => {
            if (car.id === action.payload.id) {
              return action.payload;
            }
            return car;
          });
        }
      });
    },
  },
});

export const {
  setPerson,
  addPerson,
  removePerson,
  updatePerson,
  addCar,
  removeCar,
  moveCarToPerson,
  updateCar,
  setDataFetched,
} = counterSlice.actions;

export default counterSlice.reducer;
