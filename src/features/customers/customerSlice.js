
const initialStateCustomer = {
    fullName: "",
    NationalID: "",
    createdAt: "",
  };
  
  
export default function CustomerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
      case "customer/newCustomer":
        return {
          ...state,
          fullName: action.payload.fullName,
          NationalID: action.payload.NationalID,
          createdAt: action.payload.createdAt,
        };
  
      case "customer/updateName":
        return {
          ...state,
          fullName: action.payload.fullName,
        };
  
      default:
        return state;
    }
  }
  
export function newCustomer(fullName, NationalID) {
    return {
      type: "customer/newCustomer",
      payload: { fullName, NationalID, createdAt: new Date().toISOString() },
    };
  }
  
 export function updateName(fullName) {
    return {
      type: "customer/updateName",
      payload: {fullName},
    };
  }
  
