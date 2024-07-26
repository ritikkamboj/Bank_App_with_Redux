// import { type } from "@testing-library/user-event/dist/type";
import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


function BalanceDisplay() {
  const amount = useSelector(store => store.account.amount)
  console.log(amount)
  // console.log(balance , typeof(balance))

  return <div className="balance">{formatCurrency(amount)}</div>;
}

export default BalanceDisplay;
