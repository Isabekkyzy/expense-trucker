import ExpenseDate from "./ExpenseDate"
import './ExpensesItem.css'

const ExpensesItem = (props) => {
  return (
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
     <h2 className="expense-item__description">{props.title}</h2>
     <div className="expense-item__price ">$ {props.amount}</div>
    </div>
    )
}

export default ExpensesItem