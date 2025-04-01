import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({chartData}) => {
    return (
        <div className="mt-14 flex flex-col items-center w-[90%] gap-3">
            <h2 className='text-2xl text-red-600'>Evolução dos casos</h2>
            <Line data={chartData} />
        </div>

    )
}

export default Chart
