import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  NationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer ",
  initialState,
  reducers: {
    newCustomer: {
      prepare(fullName, NationalID) {
        return {
          payload: {
            fullName,
            NationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.NationalID = action.payload.NationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

console.log(customerSlice);
export const {newCustomer , updateName } = customerSlice.actions;
export default customerSlice.reducer;


// const initialStateCustomer = {
//     fullName: "",
//     NationalID: "",
//     createdAt: "",
//   };

// export default function CustomerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//       case "customer/newCustomer":
//         return {
//           ...state,
//           fullName: action.payload.fullName,
//           NationalID: action.payload.NationalID,
//           createdAt: action.payload.createdAt,
//         };

//       case "customer/updateName":
//         return {
//           ...state,
//           fullName: action.payload,
//         };

//       default:
//         return state;
//     }
//   }

// export function newCustomer(fullName, NationalID) {
//     return {
//       type: "customer/newCustomer",
//       payload: { fullName, NationalID, createdAt: new Date().toISOString() },
//     };
//   }

//  export function updateName(updatedName) {
//     return {
//       type: "customer/updateName",
//       payload: updatedName,
//     };
//   }

// ----Above Approach is when we are using old approach of writing redux and below is according to modern redux toolkit .
