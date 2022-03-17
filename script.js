const API_KEY = "2df9ac89-0a73-498d-a5bd-d76aa0188225";

// btn Render Countries list

const btnCountriesList = document
  .getElementById("countries-list-btn")
  .addEventListener("click", () => {
    // getCountries;
  });
const getCountries = async () => {
  try {
    const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderCountries = async () => {
  try {
    const data = await getCountries();
    const countriesList = document.getElementById("countries-list");
    const ulCountriesList = countriesList.children[2];
    ulCountriesList.innerHTML = "";
    data.countries.forEach((country, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;
      ulCountriesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("countries-list-btn").addEventListener("click", () => {
  renderCountries();
});

/**-------------------RENDER LANGUAGES LIST------------------------------------*/
const getLanguages = async () => {
  try {
    const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderLanguages = async () => {
  try {
    const data = await getLanguages();
    const languagesList = document.getElementById("languages-list");
    const ulLanguagesList = languagesList.children[2];
    ulLanguagesList.innerHTML = "";
    data.languages.forEach((language, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${language.name}</div>
                <div>Code: ${language.code}</div>
            </div>`;
      ulLanguagesList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("languages-list-btn").addEventListener("click", () => {
  renderLanguages();
});

/*=========================== HOLIDAY ============================*/
const searchQuery = document.getElementById("search-query");
const yearQuery = document.getElementById("year-query");
const monthQuery = document.getElementById("month-query");
const dayQuery = document.getElementById("day-query");
const countryQuery = document.getElementById("country-query");
const languageQuery = document.getElementById("language-query");

const getHolidays = async () => {
  try {
    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=VN&year=2021`;
    //here is how we add a dynamic value (API KEY) to the url
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data); //have a look the retrieved data
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderHolidays = async () => {
  try {
    const data = await getHolidays();
    const holidaysList = document.getElementById("holidays-list");
    const ulHolidaysList = holidaysList.children[2];
    // ulHolidaysList.innerHTML = "";
    data.holidays.forEach((holiday, index) => {
      const x = document.createElement("li");
      // x.innerHTML = `<div class="bullet">${index + 1}</div>
      //       <div class="li-wrapper">
      //           <div class="li-title">${holiday.name}</div>
      //           <div>${holiday.date}</div>
      //       </div>`;
      ulHolidaysList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};
document.getElementById("holidays-btn").addEventListener("click", () => {
  renderHolidays();
});
