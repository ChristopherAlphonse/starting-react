import "./Expenses.css";
import ExpenseDate from "./ExpenseDates";

const Expenses = (props) => {
  return (
    <div className="expense-item ">
      <ExpenseDate />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">Amount paid: ${props.amount}</div>
      </div>
    </div>
  );
};

export default Expenses;
