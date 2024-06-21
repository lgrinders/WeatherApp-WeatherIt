export default function Forecast({ forecast }) {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  );

  let startOfDay = [];

  forecast.list.forEach((item) => {
    if (item.dt_txt.split(" ")[1] === "00:00:00") {
      startOfDay.push(item);
    }
  });

  return (
    <>
      <div className="m-auto flex h-full w-full flex-col justify-evenly gap-3 bg-gray-100/50 p-3 sm:w-[500px]">
        {startOfDay.map((item, index) => {
          return (
            <div
              className="flex h-full items-center justify-between rounded-lg bg-gray-200 px-2"
              key={index}
            >
              <div className="flex items-center">
                <div>
                  <img
                    alt="weather-icon"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className=" w-10"
                  />
                </div>
                <p className="font-bold">{forecastDays[index]}</p>
              </div>

              <div className="flex gap-2">
                <p className="font-bold">{item.weather[0].main}</p>
                <p>{Math.round(item.main.temp_max)}°F</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
