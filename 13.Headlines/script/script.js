const container = document.getElementById("container");
const countryCodes = {
  Argentina: "AR",
  Australia: "AU",
  Austria: "AT",
  Belgium: "BE",
  Brazil: "BR",
  Bulgaria: "BG",
  Canada: "CA",
  China: "CN",
  Colombia: "CO",
  Cuba: "CU",
  "Czech Republic": "CZ",
  Egypt: "EG",
  France: "FR",
  Germany: "DE",
  Greece: "GR",
  "Hong Kong": "HK",
  Hungary: "HU",
  India: "IN",
  Indonesia: "ID",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Japan: "JP",
  Latvia: "LV",
  Lithuania: "LT",
  Malaysia: "MY",
  Mexico: "MX",
  Morocco: "MA",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nigeria: "NG",
  Norway: "NO",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Romania: "RO",
  Russia: "RU",
  "Saudi Arabia": "SA",
  Serbia: "CS",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "South Africa": "ZA",
  "South Korea": "",
  Sweden: "SE",
  Switzerland: "SZ",
  Taiwan: "TW",
  Thailand: "TH",
  Turkey: "TR",
  UAE: "",
  Ukraine: "UA",
  "United Kingdom": "GB",
  "United States": "US",
  Venuzuela: "VE",
};

const getColor = () => {
  return `rgba(${200 + Math.floor(Math.random() * 55-20)}, ${
    200 + Math.floor(Math.random() * 55)-20
  }, ${200 + Math.floor(Math.random() * 55)-20}, 0.9)`;
};

const getDefaultElement = (givenText) => {
  const element = '<p class="news" style="background: '+getColor()+';\">'+givenText+'</p>';
  return element;
}

const printArticles = (articles) => {
  container.innerHTML = "";
  for (const article of articles.articles) {
    const newPara = document.createElement("p");
    newPara.innerHTML = article.title;
    newPara.className = "news";
    newPara.style.background = getColor();
    container.appendChild(newPara);
  }
};

const getUrl = (selectedCountry) => {
  return (
    "https://newsapi.org/v2/top-headlines?country=" +
    countryCodes[selectedCountry] +
    "&apiKey=8590fb4927c84b6f988188a98d3d95ce"
  );
};

const getHeadlines = (selectedCountry) => {
  document.getElementById("container").innerHTML = getDefaultElement("Loading...");
  fetch(getUrl(selectedCountry))
    .then((res) => {
      if (!res.ok) {
        throw "Some error occured";
      }
      return res.json();
    })
    .then((headlines) => {
      printArticles(headlines);
    })
    .catch(
      (err) =>
        (document.getElementById("container").innerHTML = getDefaultElement("Some error occured"))
    );
};

for (const [key, value] of Object.entries(countryCodes)) {
  var option = document.createElement("option");
  option.value = key;
  option.textContent = key;
  document.getElementById("selectedCountry").appendChild(option);
}

const getData = (event) => {
  event.preventDefault();
  const selectedCountry = document.getElementById("selectedCountry").value;
  getHeadlines(selectedCountry);
};

const getRandom = () => {
  var maxSize = Object.keys(countryCodes).length;
  val = Math.floor(Math.random() * Object.keys(countryCodes).length);
  for (const [key, value] of Object.entries(countryCodes)) {
    if (!val) {
      getHeadlines(key);
      document.getElementById("selectedCountry").value = key;
      break;
    }
    val--;
  }
};

container.innerHTML = getDefaultElement("Please select a Country");
console.log(getDefaultElement("Please select a Country"));
document.getElementById("userInput").style.background = getColor();
