import Expenses from "./components/Expenses/Expenses";
import dummyData from "./API/dummyData.jsx";
import Card from "./components/UserInterface/Card";
import "./App.css";

function App() {
  return (
    <Card className="expenses">
      <h1> Expense Tracker</h1>
      <Expenses
        key={dummyData[0].id}
        title={dummyData[0].title}
        amount={dummyData[0].amount}
        date={dummyData[0].date}
      />
      <Expenses
        key={dummyData[1].id}
        title={dummyData[1].title}
        amount={dummyData[1].amount}
        date={dummyData[1].date}
      />
      <Expenses
        key={dummyData[2].id}
        title={dummyData[2].title}
        amount={dummyData[2].amount}
        date={dummyData[2].date}
      />
      <Expenses
        key={dummyData[3].id}
        title={dummyData[3].title}
        amount={dummyData[3].amount}
        date={dummyData[3].date}
      />
    </Card>
  );
}

export default App;
