<template>
  <div id="app">

    <div class="title">
      <title> Weather Searcher </title>
      <h1> Weather Searcher </h1>
    </div>
    
    <div class="search-bar">
      <input 
      type = "text" 
      placeholder="Enter the City here..." 
      class = "search"
      v-model="query"
      @keypress="getWeather"/>
    </div>

    <div class="main-box">
      <div class="dtl" v-if="typeof weather.main != 'undefined'" > 
        <p class = "location"> {{ weather.name}} , {{ weather.sys.country }} </p>
        <p class = "date"> {{dateBuild()}} </p>
        <p class = "temp"> {{ Math.round(weather.main.temp)}}℃ </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      api_url: "https://api.openweathermap.org/data/2.5/",
      api_key: "API_KEY_HERE",
      query: '',
      weather: {}
    }
  },

  methods: {

    getWeather(e){
      if(e.key === "Enter"){
        fetch(`${this.api_url}weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then(
          res => {
            return res.json();
          }).then(this.setResults)} 
    },

    setResults (results){
      this.weather = results;
    },

    dateBuild(){
      let dt = new Date();
      let months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'Novemver' , 'December'];
      let weeks = ['Monday' , ' Tuesday' , 'Wednesday' , 'Thursday' , 'Friday', 'Saturday' , 'Sunday'];
      
      let current_date = dt.getDate();
      let current_week = weeks[dt.getDay()-1];
      let current_year = dt.getFullYear();
      const current_month = months[dt.getMonth()];

      return `${current_date} ${current_month}, ${current_week} ${current_year}`
    }
  }
};
</script>
<style>
body{
  margin: 0%;
  padding: 0;
  backface-visibility: visible;
  background-image: url('./assets/mars2.webp');
  background-size: cover;
}

.title{
  position: absolute;
  font-display: initial;
  font-family: monospace;
  font-size: medium;
  color: white;
  top:05%;
  left: 40%;
  margin: 2px;
  padding: 12px solid #fff;
  margin: auto;
  border-radius: 12px;
}

.dtl{
  display: initial;
  position: absolute;
  font-size: 150%;
  position: absolute;
  left: 40%;
  top: 30%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-stretch: ultra-condensed;
  font-size: xx-large;
  color: white;
  border: 2px solid white;
  border-radius: 12px;
  padding: 20px;
}

.main-box{
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 30%;
  left: 38%;
  border-radius: 10px;
  margin: 10px auto;
  border-radius: 25px;
  margin: 2px solid;
}
.dtl .temp{
  font-size: 30px;
}

.dtl .location{
  font-size: 40px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.dtl .time{
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.dtl .date{
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.dtl .temp{
  display: inline-block;
  padding: 10px 25px;
  font-display: initial;
  font-size: 102px;
  font-weight: 300;
}

.search-bar{
  width: 20%;
  position: relative;
  position: absolute;
  top: 15%;
  left: 40%;
}

.search-bar:focus{
  color: #000;
  box-shadow: 0 0 5px #fd5e53;
}

.search-bar .btn{
  width: 45px;
  height: 36px;
  border: 1px soid #000000;
  background-color: black;
}

.footer{
  color: white;
  font-display: inherit;
  font-family: sans-serif;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 80%;
  left: 35%;
  font-size: 15px;
}

.search-bar .search{
  width: 50%;
  border: none;
  padding: 2px solid;
  border-radius: 12px;
  position: absolute;
  background-color: white;
  width: 80%;
  height: 2rem;
  position: absolute;
  margin: auto;
}

#app, *{
  margin: auto;
  font-size-adjust: inherit;
  font-style: italic;
  font-size: 20px;
}

.nav-bar:hover{
  transition: 1.6s ease-in-out;
  background-color: white;
  color: black;
}

@media only screen and (max-width: 500px){
  *{
    margin: auto;
    margin-right: auto;
    margin-left: auto;
    margin: 0;
    padding: 0;
    background-image: url('./assets/mobile bg.webp');
    cursor: pointer;
  }

  .search-bar{
    width: 60%;
    color: #fff;
    width: 250px;
    position: absolute;
    left: 35%;
  }

  .main-box{
    width: 10%;
    font-size: 5px;
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 25%;
  }

  .title{
    font: xx-large;
    position: absolute;
    left: 35%;
  }

  .dtl{
    padding: 2px;
    font-size: 10px;
  }
}
</style>
