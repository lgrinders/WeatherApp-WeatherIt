import WeatherItLogoSVG from "../components/WeatherItLogoSVG/WeatherItLogoSVG";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Search from "../components/Search/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { AuroraHero } from "../components/AuroraHero/AuroraHero";
import Footer from "../components/Footer/Footer";

export function Home() {
  const [currentWeatherArray, setCurrentWeatherArray] = useState([]); //stores current weather
  const [currentforecastArray, setCurrentForecastArray] = useState([]); //stores current forecast

  const handleOnSearchChange = (searchData) => {
    //searchData contains the city name, lat and lon

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${searchData.lat}&lon=${searchData.lon}&appid=${WEATHER_API_KEY}&units=imperial`,
    ); //fetches weather data from api using search data from geo api

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${searchData.lat}&lon=${searchData.lon}&appid=${WEATHER_API_KEY}&units=imperial`,
    ); //fetches forecast data from api using search data from geo api

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      let weatherResponse = await response[0].json(); //turns fetched data into json
      let forecastResponse = await response[1].json();

      currentWeatherArray.length > 2 ? currentWeatherArray.pop() : null;

      setCurrentWeatherArray([weatherResponse, ...currentWeatherArray]); //adds more weather data into the same stored state
      setCurrentForecastArray([forecastResponse, ...currentforecastArray]); //adds more forecast data into the stored state
    });
  };

  return (
    <>
      {/* <AuroraHero /> */}
      <NavBar />
      <div className="m-auto min-h-screen w-screen px-10 pt-20">
        <WeatherItLogoSVG />
        <Search onSearchChange={handleOnSearchChange} />
        <div className="flex-col justify-center gap-5 xl:flex xl:flex-row">
          {currentWeatherArray && (
            <CurrentWeather
              data={[currentWeatherArray, currentforecastArray]} //passes weather and forecast data from home component to current weather
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
