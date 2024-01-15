import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

export default function SearchBox() {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9fc6d878b226eb3bdb66e109a986e15c";

    let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            pressure: jsonResponse.main.pressure,
            windSpeeed: jsonResponse.wind.speed,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    let handleSubmit = (event) => {
        event.preventDefault(); //preventDefault must be called '()'
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <>
            <div>
                <h3>Search from Web</h3>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        size="small"
                        value={city}
                        onChange={handleChange}
                    ></TextField>
                    <br />
                    <Button type="submit" variant="contained" color="success">
                        Search
                    </Button>
                </form>
            </div>
        </>
    );
}
