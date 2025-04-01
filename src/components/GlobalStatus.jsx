const GlobalStatus = ({ globalStatus, formatNumber }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-[90%] mt-5">
            <div className="flex flex-col items-center p-3 lg:p-10 gap-2">
                <h2 className="font-bold lg:text-4xl">Casos Globais</h2>
                <p className="text-2xl text-red-600">{formatNumber(globalStatus.cases)}</p>

            </div>
            <div className="flex flex-col items-center p-3 lg:p-10 gap-2 ">
                <h2 className="font-bold lg:text-4xl">Mortes</h2>
                <p className="text-2xl text-red-600">{formatNumber(globalStatus.deaths)}</p>

            </div>
            <div className="flex flex-col items-center p-3 lg:p-10 gap-2">
                <h2 className="font-bold lg:text-4xl">Recuperados</h2>
                <p className="text-2xl text-red-600">{formatNumber(globalStatus.recovered)}</p>

            </div>
        </div>
    )
}

export default GlobalStatus
