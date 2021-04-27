import WeatherApp from "./components/WeatherApp"
import CityForm from "./components/CityForm"
import {useState} from "react"
function App() {
  const [city , setCity] = useState('Paris')
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <WeatherApp city={city}/>
      <CityForm setCity = {setCity}/>
    </div>
  )
}

export default App
