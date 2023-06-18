import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    action: "read",
    power: 54,
    time: "0,5s",
  },
  {
    id: 2,
    action: "create",
    power: 25,
    time: "0,4s",
  },
  {
    id: 3,
    action: "delete",
    power: 8,
    time: "0,1ms",
  },
  {
    id: 4,
    action: "update",
    power: 31,
    time: "0,36s",
  },
];

const slice = createSlice({
  name: "objects",
  initialState,
  reducers: {
    sortByPower: (state) => {
      state.sort((a, b) => a.power - b.power);
    },
    sortByTime: (state) => {
      state.sort((a, b) => {
        const aTime = parseFloat(a.time.replace(",", "."));
        const bTime = parseFloat(b.time.replace(",", "."));
        return aTime - bTime;
      });
    },
    findHighestPower: (state) => {
      state.sort((a, b) => b.power - a.power);
    },
    addObject: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (object) => {
        return { payload: object };
      },
    },
  },
});

export const { sortByPower, sortByTime, findHighestPower, addObject } =
  slice.actions;

export default slice.reducer;