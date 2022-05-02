import "./Expenses.css";
import ExpenseDate from "./ExpenseDates";
import Card from "../UserInterface/Card";

const Expenses = (props) => {
  const buttonHandler = () => {
    console.log("ive been clicked");
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">Amount paid: ${props.amount}</div>
        <button onClick={buttonHandler}>click me</button>
      </div>
    </Card>
  );
};

export default Expenses;
