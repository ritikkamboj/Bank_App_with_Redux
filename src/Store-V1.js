// we have to write the redux code here

// import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";


const initialStateAccount = {
  loan: 0,
  amount: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  NationalID: "",
  createdAt: "",
};

//  Reducer for Customer

function CustomerReducer(state = initialStateCustomer, action) {
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

function AccountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "banking/credit":
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    case "banking/debit":
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    case "banking/requestloan":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        amount: state.amount + action.payload.amount,
      };
    case "banking/payLoan":
      return {
        ...state,
        loan: 0,
        amount: state.amount - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

// as now we have more than one reducer --> customerReducer and accountReducer
// firstly we have to combine the reducer

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer);
// store.dispatch({ type: "banking/credit", payload: 500 });

// console.log(store.getState());

// store.dispatch({ type: "banking/debit", payload: 200 });

// console.log(store.getState());

//case in which we are app;ying for a loan ;

// store.dispatch({
//   type: "banking/requestloan",
//   payload: {
//     amount: 1000,
//     loanPurpose: "To Buy A Mercedes Car",
//   },
// });

// console.log(store.getState());

// remaining case when we clear the all the loan

// store.dispatch({ type: "banking/payLoan" });

// console.log(store.getState());

console.log("the file which contain redux ");

function credit(amount) {
  return { type: "banking/credit", payload: amount };
}

function debit(amount) {
  return { type: "banking/debit", payload: amount };
}

function requestloan(loan, reason) {
  return {
    type: "banking/requestloan",
    payload: {
      amount: loan,
      loanPurpose: reason,
    },
  };
}

function payLoan() {
  return { type: "banking/payLoan" };
}
// all things after that remain same as earlier

store.dispatch(credit(500));
console.log(store.getState());

store.dispatch(debit(200));
console.log(store.getState());

store.dispatch(requestloan(1000, "Have to buy A Mercedes Car "));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

// creating the action creators for customre alos

function newCustomer(fullName, NationalID) {
  return {
    type: "customer/newCustomer",
    payload: { fullName, NationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: {fullName},
  };
}

// now we can use both reducer any time 
// lets we have to create a customer 

store.dispatch(newCustomer('Aashish Kumar', '123124'));
store.dispatch(updateName('Aashish Kumar Kamboj'));
store.dispatch(credit(1111))
console.log(store.getState());