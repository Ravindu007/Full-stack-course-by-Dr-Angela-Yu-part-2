import React, { useEffect, useState } from 'react'

const Home = () => {

  const [isLoading , setIsLoading] = useState(true)

  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("")
  const [weatherIcon, setWeatherIcon] = useState(null)

  //input fields
  const [inputCity, setInputCity] = useState("")
  
  const handleSubmit = async(e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("city", inputCity)

    const response = await fetch("http://localhost:4000/requestData", { //request to backend
      method:"POST",
      body:formData
    })
    const json = await response.json()
    if(response.ok){
      setCity(json.name)
      setTemp(json.main.temp)
      setWeatherIcon(json.weather[0].icon)
      setIsLoading(false)
    }
  }

  return (
    <div>
      {isLoading ? <p>Loading...</p> : (
        <>
          <h1>Temperature in {city} is {temp}</h1>
          <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" />
        </>
      )}
      <form onSubmit={handleSubmit}>
        <label>Input City</label>
        <input 
          type="text"
          value={inputCity}
          onChange={e=>setInputCity(e.target.value)} 
        />
        <button>Get weather data</button>
      </form>
    </div>
  )
}

export default Home