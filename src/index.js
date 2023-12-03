function updateTime(){

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = 
`${sydneyTime.format("hh:mm")} 
<small>${sydneyTime.format("A")}</small>`;

let fortalezaElement = document.querySelector("#fortaleza");
let fortalezaDateElement = fortalezaElement.querySelector(".date");
let fortalezaTimeElement = fortalezaElement.querySelector(".time");
let fortalezaTime = moment().tz("America/Fortaleza");
fortalezaDateElement.innerHTML = fortalezaTime.format("MMMM Do YYYY");
fortalezaTimeElement.innerHTML = 
`${fortalezaTime.format("hh:mm")} 
<small>${fortalezaTime.format("A")}</small>`;
}



function updateCity(event){
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">
        ${cityTime.format("hh:mm")}
        <small>
        ${cityTime.format("A")}
        </small>
        </div>
    </div>
    `;

}
updateTime();
setInterval(updateCity, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

