import ExpensesItem from './ExpensesItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
  
 

    if (props.filteredExpenses.length === 0 && props.filteredYear !== 'All') {
       // length бул жонокой эле свойства дилинасы 
// длинасы 0го барабар болсо массив пустой болсо  
// no expenses fount  чыгат

    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  }

  // render болгон
  if (props.filteredExpenses.length > 0 ) {
  
    return <ul className='expenses-list'>
      
      {props.filteredExpenses.map((expense) => (
        <ExpensesItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))} 
    </ul>
  }

  // 
  if (props.filteredYear === 'All') {
    return <ul className='expenses-list'>
      {props.expenses.map(expense => (
     <ExpensesItem 
     key={expense.id}
     title={expense.title}
     amount={expense.amount}
     date={expense.date}
    />

    ))}
    </ul>
  }
}

export default ExpensesList