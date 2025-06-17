import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

export const Weather = () => {
  ;lfmasldmflafjoaflmael;fmeaopfmlfmflaekf
  const [city, setcity] = useState("");
  const [weather, setweather] = useState();

  function handlecitychange(event) {
    setcity(event.target.value);
  }

  async function fetchWeatherData() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=31c56bcf97a7583fefe7e02f84a16eaa`
      );
      setweather(response);
      console.log(response);
    } catch (error)
    {
      alert("Please Enter a valid Location")
          }
  }

  function handleclick() {
    fetchWeatherData();
  }

  return (
    <div className="h-screen w-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg')",
        }}
      ></div>

      {/* Weather Card */}
      <div className="relative bg-white w-[300px] h-[400px] p-8 rounded-xl shadow-xl text-center border-x-gray-500 mx-auto top-1/2 transform -translate-y-1/2">
        <h1 className="text-xl font-bold mb-5">Weather Application</h1>
        <input
          type="text"
          placeholder="Location"
          value={city}
          onChange={handlecitychange}
          className="border rounded-full border-gray-200 text-center w-[180px] shadow-lg h-[32px]"
        />
        <button
          className="bg-white p-2 mx-2 gap-4 border border-gray-200 rounded-xl shadow-lg"
          onClick={handleclick}
        >
          <CiSearch />
        </button>
        {weather && (
          <>
            <div className="mt-5">
              <div className="flex items-center justify-center">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <h1 className="font-bold text-xl">{weather.data.name}</h1>
              <div className="grid grid-cols-2 gap-7">
                <div className="h-[100px] w-[120px] mt-5 rounded-xl shadow-xl bg-blue-100">
                  <h1 className="mt-3">
                    Temperature is <b>{weather.data.main.temp}°C</b>
                  </h1>
                </div>
                <div className="h-[100px] w-[120px] mt-5 rounded-xl shadow-xl bg-blue-100">
                  <p className="mt-3">
                    Weather Condition is <b>{weather.data.weather[0].description}</b>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
