import GlobalStatus from './components/globalStatus';
import Map from './components/Map';
import Chart from './components/Chart';
import { useData } from "./hooks/useData";

function App() {
  
  const {countries, globalStatus, historyData, formatNumber, chartData} = useData()

  return (
    <div className='flex flex-col items-center py-20 bg-gray-100'>
      
      <Map countries={countries} formatNumber={formatNumber} />

      <GlobalStatus globalStatus={globalStatus} formatNumber={formatNumber} />

      <Chart historyData={historyData} chartData={chartData}/>

    </div>
  )
}

export default App
