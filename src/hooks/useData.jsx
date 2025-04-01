import { useEffect, useState } from "react";
const URL = "https://disease.sh/v3/covid-19"
import numeral from "numeral/min/numeral.min.js"


export function useData() {
    //DADOS DA API
    const [countries, setCountries] = useState([])
    const [globalStatus, setGlobalStatus] = useState({})
    const [historyData, setHistoryData] = useState({})

    useEffect(() => {
        fetch(`${URL}/countries`).then((response) => response.json()).then((data) => setCountries(data))

        fetch(`${URL}/all`).then((response) => response.json()).then((data) => setGlobalStatus(data))

        fetch(`${URL}/historical/all?lastdays=30`).then((response) => response.json()).then((data) => setHistoryData(data))
    }, [])
    
    //DADOS PARA O GRÁFICO
    const chartData = {
        labels: historyData.cases ? Object.keys(historyData.cases) : [],
        datasets: [
            {
                label: "Casos",
                data: historyData.cases ? Object.values(historyData.cases) : [],
                borderColor: "red",
                fill: false,
            },
        ],
    }

    //FORMATAÇÃO DOS NÚMEROS
    const formatNumber = (number) => {
        return numeral(number).format('0.0a')
    }

    return {
        countries,
        globalStatus,
        historyData,
        formatNumber,
        chartData,
    }
}