

const initialStateAccount = {
    loan: 0,
    amount: 0,
    loanPurpose: "",
  };
  
  
export default function AccountReducer(state = initialStateAccount, action) {
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

  
export function credit(amount) {
    return { type: "banking/credit", payload: amount };
  }
  
  export function debit(amount) {
    return { type: "banking/debit", payload: amount };
  }
  
  export function requestloan(loan, reason) {
    return {
      type: "banking/requestloan",
      payload: {
        amount: loan,
        loanPurpose: reason,
      },
    };
  }
  
  export function payLoan() {
    return { type: "banking/payLoan" };
  }