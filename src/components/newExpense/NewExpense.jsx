import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


const saveExpenseHandler = (expenseItem) => {
  const newData = {
// обьект
    ...expenseItem,
      // деструктуризация  
  // spret чачып берилген
    id: Math.random().toString
  }
 props.onChange(newData)
}
 

  return (
    <div className='new-expense'>
      <ExpenseForm onGet={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense;