import "./Expenses.css";
const Expenses = () => {
  const appDate = new Date(2022, 3, 30);
  const appExpenseTitle = "Home Insurance";
  const appExpenses = 195.23;
  return (
    <div className="expense-item ">
      <div> {appDate.toDateString()}</div>
      <div className="expense-item__description ">
        <h2>{appExpenseTitle}</h2>
        <div className="expense-item__price ">Amount paid: ${appExpenses}</div>
      </div>
    </div>
  );
};

export default Expenses;
