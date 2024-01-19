import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { red } from "@mui/material/colors";

export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9fc6d878b226eb3bdb66e109a986e15c";

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
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
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault(); //preventDefault must be called '()'
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <>
            <div>
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        style={{ margin: "20px" }}
                    >
                        Search
                    </Button>
                    {error && <p style={{color:"red"}}>No such place exists in our API !</p>}
                </form>
            </div>
        </>
    );
}
