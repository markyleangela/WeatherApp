
const myApi = "44bc5db47e32f13adda5c891a18e2acc";
var msg = document.getElementById("msg");

async function fetchData(){
    try{
        const inputVal = document.getElementById("cityInput").value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${myApi}&units=metric`);

        if(response.ok == false){
            throw new Error("INVALID CITY");
        }

        const data = await response.json();
        console.log(data);
        addInfo(data.name, data.sys.country, data.weather[0].description, data.weather[0].icon);
        

    }catch(error){
        msg.innerHTML = "<h3>CITY NOT FOUND</h3>";
        console.error(error);
    }
}


function addInfo(name, country,weather, icon){
    const list = document.getElementById("cities-section");
    const li = document.createElement("li");
    li.classList.add("city");

    const markup = `<div class="weather-widget" id="weather-widget-container">
    <h1 class="city-name"> ${name} , ${country} </h1>
    <h2 class="city-description"> ${weather} </h2>
    <img class="city-icon" src="http://openweathermap.org/img/w/${icon}.png">  
    </div>`
    
    // const markup = `<h1 class="city-name"> ${name} , ${country} </h1>
    // <h2 class="city-description"> ${weather} </h2>
    // <img class="city-icon" src="http://openweathermap.org/img/w/${icon}.png">`

    li.innerHTML = markup;
    list.appendChild(li);

}



