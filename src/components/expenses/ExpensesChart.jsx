import Chart from '../chart/Chart'
import './ExpensesChart.css'

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Okt', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]

  // итирация
for(const expense of props.expenses) {
  //getMonth  number  кайтарат

  const currentMonth = expense.date.getMonth()
  //расходко жараша
  chartDataPoints[currentMonth].value += expense.amount
  // 22 + '1' = 210   конкантинация болгон
}
return <Chart dataPoints={chartDataPoints}/>

}

export default ExpensesChart;