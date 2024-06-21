import { useState, useEffect, useRef } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

export default function Search({ onSearchChange }) {
  const [searches, setSearches] = useState([]);
  const [isSearchToggled, setIsSearchToggled] = useState(false);
  const [storedSearches, setStoredSearches] = useState([]);

  const handleOnChange = (searchData) => {
    //searchData is the value of the input/key of what was typed in, fetched from the api

    if (storedSearches.includes(searchData)) {
      return;
    }

    setStoredSearches([searchData, ...storedSearches]);

    setSearches(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    //loads options to pick from in AsyncPaginate

    return fetch(
      `${GEO_API_URL}cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions,
    ) //fetches data from GEO_API_URL
      .then((response) => response.json()) //turns fetched data into json readable data
      .then((response) => {
        return {
          options: response.data.map((city) => {
            //api requires options object which is being mapped out
            return {
              lat: `${city.latitude}`, //returns latitude from api
              lon: `${city.longitude}`, //returns longitude from api
              label: `${city.name}, ${city.countryCode}`, //returns city name and countrycode from api
            };
          }),
        };
      })
      .catch((err) => console.error(err)); //catches any errors
  };

  return (
    <>
      <div>
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={1000} //sets how often api will be requested
          value={searches} //value of what is the text box
          onChange={handleOnChange} //when the value of what is typed in changes handle change function runs
          loadOptions={loadOptions}
          className={`${isSearchToggled ? "z-50" : "z-10"} m-auto w-full sm:w-[500px]`}
          onMenuOpen={() => setIsSearchToggled(true)}
          onMenuClose={() => setIsSearchToggled(false)}
        />
      </div>
    </>
  );
}
