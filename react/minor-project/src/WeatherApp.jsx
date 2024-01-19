import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 14.14,
        humidity: 58,
        pressure: 1015,
        temp: 15.06,
        tempMax: 15.06,
        tempMin: 15.05,
        weather: "haze",
        windSpeeed: 1.5,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h2>Weather App by Delta 2.0</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}
