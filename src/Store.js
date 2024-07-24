// we have to write the redux code here

// import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const initialState = {
  loan: 0,
  amount: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

store.dispatch({ type: "banking/credit", payload: 500 });

console.log(store.getState());

store.dispatch({ type: "banking/debit", payload: 200 });

console.log(store.getState());

//case in which we are app;ying for a loan ;

store.dispatch({
  type: "banking/requestloan",
  payload: {
    amount: 1000,
    loanPurpose: "To Buy A Mercedes Car",
  },
});

console.log(store.getState());

// remaining case when we clear the all the loan 

store.dispatch({type : 'banking/payLoan' })

console.log(store.getState());

console.log("the file which contain redux ");
