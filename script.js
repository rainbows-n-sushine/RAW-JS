const apiKey="259b4cd6ec6085db9f8c6db85eaad0e1"
    const input=document.querySelector(".search input")
    const searchButton=document.querySelector('.search button')

    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&`
    
    const checkWeather=async(city)=>{
        const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
        var data=await response.json();
        console.log(data)
        document.querySelector(".city").innerText=data.name
        document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°c"
        document.querySelector(".wind").innerText=data.wind.speed+" km/h"
        document.querySelector(".humidity").innerText=data.main.humidity+" %"
        const weatherCondition=data.weather[0].main.toLowerCase()
        console.log(weatherCondition)
        const imageUrl=`./images/${weatherCondition}.png`
        document.querySelector(".weather-icon").setAttribute('src',imageUrl)
        
    }
    searchButton.addEventListener("click",()=>{
        checkWeather("q="+input.value)
    })
    