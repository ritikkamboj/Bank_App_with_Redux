// we have to write the redux code here

// import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

//  Reducer for Customer


// as now we have more than one reducer --> customerReducer and accountReducer
// firstly we have to combine the reducer

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer);

export default store ;



// now we can use both reducer any time 
// lets we have to create a customer 
