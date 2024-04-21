import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import "./weatherapp.css";



export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({

        city: "Hatta",
        country: "IN",
        humiditiy: 25,
        latitudes: "",
        longitudes: "",
        pressure: "",
        temp: 28.1,
        tempFeels: "29.9",
        tempMax: 32,
        tempMin: 28.1,
        weather: "Clear sky",
        wind: {
            deg: 189,
            gust: 1.16,
            speed: 0.88,
        }
    });

    let updateInfo = (result)=>{

        setWeatherInfo(result);
    }
    return (

        <div style={{ textAlign: "center" }} className="container">
            <h2>Weather Wise</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}