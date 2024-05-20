
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

    }catch(error){
        msg.innerHTML = "<h3>CITY NOT FOUND</h3>";
        console.error(error);
    }
}




