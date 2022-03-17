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
    // console.log("data", data); //have a look the retrieved data
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

document.getElementById("languages-list-btn").addEventListener("click", () => {
  renderLanguages();
});

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

/*=========================== HOLIDAY ============================*/

document.getElementById("holidays-btn").addEventListener("click", () => {
  renderHolidays();
});

const getHolidays = async () => {
  try {
    let Country_Key = document.getElementById("country-query").value;
    if (Country_Key === "") {
      Country_Key = "VN";
    }
    let month = document.getElementById("month-query").value;
    let day = document.getElementById("day-query").value;
    let language = document.getElementById("language-query").value;
    let search = document.getElementById("search-query").value;
    let urlQuery = "";
    if (month) {
      urlQuery += `&month=${month}`;
    }
    if (day) {
      urlQuery += `&day=${day}`;
    }
    if (language) {
      urlQuery += `&language=${language}`;
    }
    if (search) {
      urlQuery += `&search=${search}`;
    }
    changeCountry(Country_Key);
    const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=${Country_Key}&year=2021${urlQuery}`;
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
    const holidayList = document.getElementById("holidays-list");
    const ulHolidayList = holidayList.children[1];
    ulHolidayList.innerHTML = "";
    data.holidays.forEach((holidays, index) => {
      const x = document.createElement("li");
      x.innerHTML = `<div class="bullet">${index + 1}</div>
          <div class="li-wrapper">
              <div class="li-title">${holidays.name}</div>
              <div class="li-text">${holidays.weekday.date.name}, ${
        holidays.date
      }</div>
          </div>`;
      ulHolidayList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

const changeCountry = async (countryCheck) => {
  try {
    const data = await getCountries();
    const holidayList = document.getElementById("holidays-list");
    const ulHolidayList = holidayList.children[0];
    data.countries.forEach((countries, index) => {
      if (countries.code === countryCheck) {
        ulHolidayList.innerText = `Holidays of ${countries.name}`;
      }
    });
  } catch (err) {
    console.log("err", err);
  }
};
