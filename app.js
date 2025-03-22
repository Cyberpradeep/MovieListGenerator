const button = document.getElementById("button");
const city = document.getElementById("city");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
let i=0;
button.onclick = () => {
    axios .get("https://www.freetestapi.com/api/v1/movies")
    .then(function(response){
        // console.log(response);
        button.textContent="aduthathu ->";
        city.textContent=response.data[i].title;
        weather.textContent=response.data[i].year;
        temperature.textContent=response.data[i].director;
        i++;
    });
};