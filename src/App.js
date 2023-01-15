import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const initData = [
  {
    id: "el1",
    title: "New TV",
    date: new Date(2025, 2, 19),
    amount: 575.4,
  },
  {
    id: "el2",
    title: "Phone",
    date: new Date(2023, 7, 17),
    amount: 812.5,
  },
  {
    id: "el3",
    title: "Desk",
    date: new Date(2025, 4, 12),
    amount: 132.5,
  },
  {
    id: "el4",
    title: "Sofa",
    date: new Date(2024, 3, 10),
    amount: 182.5,
  },
];


 // user де initDate cакталуу
function App() {
 const [user, setUser] = useState(initData);
 // динамический алуу учун useState колдонулат эки  параметр алат

  const saveHandler = (expenseItem) => {
    // useState дин экинчи параметри setUser.......
    setUser((prevState) => {
      return[
        expenseItem,
        ...prevState
      ]
    })
  }

  return (
    <div>
      <NewExpense onChange={saveHandler} />
      <Expenses expenses={user} />
    </div>
  );
}

export default App;
