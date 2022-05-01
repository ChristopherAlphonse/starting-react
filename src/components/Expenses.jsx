import "./Expenses.css";
import ExpenseDate from "./ExpenseDates";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">Amount paid: ${props.amount}</div>
      </div>
    </Card>
  );
};

export default Expenses;
