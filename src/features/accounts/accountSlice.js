const initialStateAccount = {
  loan: 0,
  amount: 0,
  loanPurpose: "",
  isloading : false 
};

export default function AccountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "banking/credit":
      return {
        ...state,
        amount: state.amount + action.payload,
        isloading :false

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
      case 'banking/convertingCurrency':
        return {
          ...state , isloading : true 
        }
    default:
      return state;
  }
}

export function credit(amount, currency) {
  if (currency === "USD") return { type: "banking/credit", payload: amount };

  return async function (dispatch, getState) {
    // const host = 'api.frankfurter.app';
    dispatch({type : 'banking/convertingCurrency'})
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();

    const converted = data.rates.USD;

    dispatch({type: "banking/credit", payload: converted})
  };
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
