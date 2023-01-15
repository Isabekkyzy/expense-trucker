import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // expensesFilter expenseske коз каранды болот

  
 const selectYearHandler = (event) => {
  props.onChangedYear(event.target.value)
 } 

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
         {/* seleсt тин    значениялар поднятиа болуп expensesке барат */}
         <select onChange={selectYearHandler} value={props.selected}>  
        {/* двухсторонный привязка болгон */} 
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;