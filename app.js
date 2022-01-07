const OPENWEATHER_API_KEY = '35f2b1a6738bf44e604b2c561408fa58';
const KELVIN = 273.15;

const button = document.getElementById('btn');
const searchElement = document.querySelector('[data-city-search]');
const searchBox = new google.maps.places.SearchBox(searchElement);

// Standard Cities
const standard_cities = ['New York', 'Milano', 'Hong Kong'];

// pushing standard cities' data into the HTML(index.html)

standard_cities.forEach((city, i, standard_cities) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${standard_cities[i]}&appid=${OPENWEATHER_API_KEY}&lang=it`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('status'+(i)).innerHTML = standard_cities[i];
            document.getElementById('lat-value'+(i+1)).innerHTML = (data['coord']['lat']).toFixed (2);
            document.getElementById('lng-value'+(i+1)).innerHTML = (data['coord']['lat']).toFixed (2);
            document.getElementById('description'+(i+1)).innerHTML = data['weather'][0]['description'];
            document.getElementById('temp-value'+(i+1)).innerHTML = (data['main']['temp'] - KELVIN).toFixed (2) + '℃';
            document.getElementById('perc-value'+(i+1)).innerHTML = (data['main']['feels_like'] - KELVIN).toFixed (2) + '℃';
        })
        .catch(err => alert("ERROR!"));
});




button.addEventListener("click", () => {
    const city = (document.querySelector('[data-city-search]').value).split(",")[0];
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&lang=it`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('status-city').innerHTML = city;
            document.getElementById('lat-value').innerHTML = (data['coord']['lat']).toFixed (2);
            document.getElementById('lng-value').innerHTML = (data['coord']['lon']).toFixed (2);
            document.getElementById('description').innerHTML = data['weather'][0]['description'];
            document.getElementById('temp-value').innerHTML = (data['main']['temp'] - KELVIN).toFixed (2) + '℃';
            document.getElementById('perc-value').innerHTML = (data['main']['feels_like'] - KELVIN).toFixed (2) + '℃';
        })
        .catch(err => alert("ERROR!"));
});

