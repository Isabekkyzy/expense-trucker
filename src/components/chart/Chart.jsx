import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  
const chartDataPointsValues = props.dataPoints.map(data => data.value)
 //максимальный  значения кайтарат
 //   ...  массивди чачып берип койот
const totalMax = Math.max(...chartDataPointsValues)


  return (
    <div className='chart'>

      
      {props.dataPoints.map(data => (
        <ChartBar
         key={data.label}
         // ар бир элементти кеу тузуп чыгат
         label={data.label}
         value={data.value}
         maxValue={totalMax}
        />
      ))}
    </div>
  )
}

export default Chart