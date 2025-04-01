import { MapContainer, TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Map = ({ countries, formatNumber }) => {
    return (
        <MapContainer className='w-[90%] h-[400px] lg:h-[600px] rounded-xl' center={[20, 0]} zoom={2} minZoom={2} scrollWheelZoom={true} worldCopyJump={true}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countries.map((country) => (
                <Marker key={country.countryInfo.iso2} position={[country.countryInfo.lat, country.countryInfo.long]}>
                    <Popup>
                        <strong>{country.country}</strong>
                        <p>Casos: {formatNumber(country.cases)}</p>
                        <p>Mortes: {formatNumber(country.deaths)}</p>
                        <p>Recuperados: {formatNumber(country.recovered)}</p>
                    </Popup>
                    <Circle center={[country.countryInfo.lat, country.countryInfo.long]} fillColor='red' radius={Math.sqrt(country.cases) * 200}>
                        <Tooltip>{country.country}: {country.cases}</Tooltip>
                    </Circle>
                </Marker>
            ))}

        </MapContainer>
    )
}

export default Map
