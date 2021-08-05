const inputBox = document.querySelector('.inp');
inputBox.addEventListener('keypress', (e) => {

  // getting city value
  
  if (e.keyCode === 13) {
    let cityName = inputBox.value;
    console.log(cityName);
   inputBox.value = ' ';
    // fetch the weather data

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a8165cfedf68087dedfb7dc0843a1e0d`)
      .then(fetchData => {
        return fetchData.json();
      }).then((fetchedData) => {
        console.log(fetchedData);
       
        // dispaly weather information
        let city = document.querySelector('.city');
        city.innerText = `${fetchedData.name}, ${fetchedData.sys.country}`;

        let now = new Date();
        let date = document.querySelector('.date');
        date.innerText = dateInfo(now);

        let temp = document.querySelector('.tmp');
        temp.innerHTML = `${Math.round(fetchedData.main.temp)}&deg;C`;

        let visiblity = document.querySelector('.visiblity');
        visiblity.innerText = fetchedData.weather[0].main;

        let image = document.querySelector('.img');
        let val = fetchedData.weather[0].icon;
        image.innerHTML = `<img src='http://openweathermap.org/img/wn/${val}@2x.png'> `;

        let min_max = document.querySelector('.min_max');
        min_max.innerText = `${Math.round(fetchedData.main.temp_min)}°C (min) / ${Math.round(fetchedData.main.temp_max)}°C (max)`;
      
      }
     
      )
      .catch(err => {
        console.log(err);
        alert("No Result Found!!!  Please Enter Correct City Name.")

      })
  }


});


function dateInfo(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
