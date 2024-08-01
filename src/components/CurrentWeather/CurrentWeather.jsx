import { useEffect, useState, useRef } from "react";
import { FaMousePointer } from "react-icons/fa";
import Forecast from "../Forecast/Forecast";

const CurrentWeather = ({ data }) => {
  const [selected, setSelected] = useState("");
  const cardRefs = useRef();
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selected) {
        const isOutside = cardRefs.current.every(
          (ref) => ref && !ref.contains(e.target),
        );
        if (isOutside) {
          setSelected("");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selected]);


  console.log(data)

  return (
    <>
      {data[0].length !== 0 &&
        data[0].map((item) => {
          return (
            <div key={item.name} className="flex flex-col items-center">
              <div className="relative mt-5 w-full max-w-[500px]  cursor-pointer h-[250px] sm:w-[500px]">
                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-between rounded-lg bg-white px-6 sm:px-10 py-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
                  ${selected === item.name ? "-translate-y-1/2 transform duration-500" : "transform duration-500"}`}
                  onClick={() =>
                    selected === item.name
                      ? setSelected("")
                      : setSelected(item.name)
                  }
                  ref={addToRefs}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold sm:text-2xl">
                        {item.name}
                      </p>
                      <p className="text-md font-light sm:text-xl">
                        {item.weather[0].description}
                      </p>
                    </div>
                    <div className="rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                      <img
                        alt="weather-icon"
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-6xl font-bold tracking-tighter sm:text-8xl">
                        {Math.round(item.main.temp)}°F
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-md font-light sm:text-xl">More Info</p>
                      <FaMousePointer size={20} />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col justify-between rounded-lg ${selected ? " rounded-b-none" : ""} bg-gray-100/50`}
                >
                  <div className="h-1/2"></div>
                  <div className="flex h-1/2 flex-col p-5 text-center">
                    <p className="text-lg font-bold">Details</p>
                    <div className="flex justify-center gap-2 text-center">
                      <div className="">
                        <p className="font-light">feels like:</p>
                        <p className="font-semibold">
                          {Math.round(item.main.feels_like)}°F
                        </p>
                      </div>
                      <div className="">
                        <p className="font-light">wind:</p>
                        <p className="font-semibold">
                          {Math.round(item.wind.speed)} mph
                        </p>
                      </div>
                      <div className="">
                        <p className="font-light">humidity:</p>
                        <p className="font-semibold">{item.main.humidity} %</p>
                      </div>
                      <div className="">
                        <p className="font-light">pressure:</p>
                        <p className="font-semibold">
                          {item.main.pressure} hPa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`relative z-0 w-full overflow-hidden rounded-lg rounded-t-none transition-all duration-500 ${selected === item.name ? "h-[400px]" : "h-0"}`}
              >
                <div
                  id="slide-in"
                  className={`absolute left-0 top-0 h-full w-full transform opacity-0 transition-all duration-500 ease-in-out ${selected === item.name ? "translate-y-0 opacity-100" : "translate-y-full"}`}
                >
                  <Forecast
                    forecast={data[1].find(
                      (forecastItem) => forecastItem.city.name === item.name,
                    )}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CurrentWeather;
