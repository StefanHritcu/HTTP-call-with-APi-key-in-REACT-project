import { useState } from "react"


function Parent() {
    const [city, setCity] = useState("");
    const [weatherData,setWeatherData] = useState(null);

    const convert = (kelvin) => {
        return kelvin -273.15;
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleSelectCity = () => {
        if(city) {
            const apiKey = ``;
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiURL)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error("di nuovo error", error))
        }
    }
    
    
    return(
        <>
        <div>
            <h1 className="bg-blue-500 p-6 text-5xl text-center">Choose a city</h1>
            <div className="flex justify-start">
            <input className="bg-blue-200 p-2 flex justify-center" type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={handleCityChange}
             />

             <button className="bg-gray-200 p-2 border-black ml-4" onClick={handleSelectCity}>Select City</button>
            </div>
        </div>

        <div>
            {weatherData ? (
                
                <div>
                    <h1>Here data is received from the HTTP call:</h1>
                    <h2>Selected city: {city}</h2>
                    <p>Temparature: {convert(weatherData.main.temp).toFixed(2)}C</p>
                    <p>Weather conditions: {weatherData.weather[0].description}</p>
                </div>
            ) : (<p className="bg-red-300 text-4xl text-center p-6">Enter a city please!</p>)}
        </div>
    
        
        </>
    )
}
export default Parent
