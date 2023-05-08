// CCMoQ0anMTf6F-QE7POrO85zGRv77VNwgV-b4mpXGPwVKVR3WrIN33IqiRkTfgG8-bg

const countryListElement = document.getElementById("countries");
const provinceListElement = document.getElementById("province");
const cityListElement = document.getElementById("city");
const usernameElement = document.getElementById("username");
const signupElement = document.getElementById("signup");

let API_TOKEN = "";

async function getAccessToken() {
  const response = await fetch(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      headers: {
        Accept: "application/json",
        "api-token":
          "CCMoQ0anMTf6F-QE7POrO85zGRv77VNwgV-b4mpXGPwVKVR3WrIN33IqiRkTfgG8-bg",
        "user-email": "gopinath.krm@nyros.com",
      },
    }
  );
  const apiToken = await response.json();
  return apiToken.auth_token;
}

async function getCountryList() {
  API_TOKEN = await getAccessToken();
  const response = await fetch(
    "https://www.universal-tutorial.com/api/countries/",
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  const countryList = await response.json();
  if (countryList.length > 1) {
    countryList.forEach((country, index) => {
      const option = document.createElement("option");
      option.value = country.country_name;
      option.textContent = country.country_name;
      countryListElement.appendChild(option);
    });
  }
}

async function getProvinceList(countryName) {
  const response = await fetch(
    `https://www.universal-tutorial.com/api/states/${countryName}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  const provinceList = await response.json();
  if (provinceList.length > 1) {
    provinceListElement.innerHTML = "";
    // set select a province
    const option = document.createElement("option");
    option.disabled = true;
    option.selected = true;
    option.value = "";
    option.textContent = "Select a Province";
    provinceListElement.appendChild(option);
    // Create new city options based on country
    provinceList.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.state_name;
      option.textContent = country.state_name;
      provinceListElement.appendChild(option);
    });
  }
  provinceListElement.disabled = false;
}

async function getCityList(provinceName) {
  const response = await fetch(
    `https://www.universal-tutorial.com/api/cities/${provinceName}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  const cityList = await response.json();
  if (cityList.length) {
    // Remove previous options
    cityListElement.innerHTML = "";
    //   set select a city as default value with disabled state
    const option = document.createElement("option");
    option.disabled = true;
    option.selected = true;
    option.value = "";
    option.textContent = "Select a City";
    cityListElement.appendChild(option);
    // Create new city options based on country
    cityList.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.city_name;
      option.textContent = city.city_name;
      cityListElement.appendChild(option);
    });
  }
  cityListElement.disabled = false;
}

function countryNameChanged(e) {
  cityListElement.innerHTML =
    "<option value='' selected disabled>Select a City</option>";
  cityListElement.disabled = true;
  const countryName = e.target.value;
  getProvinceList(countryName);
}

// when country option list is changed - update province list options
countryListElement.addEventListener("change", countryNameChanged);

// when province option list is changed - update city list options
provinceListElement.addEventListener("change", (e) => {
  const provinceName = e.target.value;
  getCityList(provinceName);
});

function signupValidation(params) {
  if (usernameElement.value === "") {
    alert("Please enter a username");
    usernameElement.focus();
    return;
  }
  if (usernameElement.value.length <= 3) {
    alert("Username should be more than 3 charecters");
    usernameElement.focus();
    return;
  }
  if (usernameElement.value.length > 12) {
    alert("Username cannot be more than 12 charecters");
    usernameElement.focus();
    return;
  }
  if (countryListElement.value === "") {
    alert("Select a country");
    countryListElement.focus();
    return;
  }
  if (provinceListElement.value === "") {
    alert("Select a Province");
    provinceListElement.focus();
    return;
  }
  if (cityListElement.value === "") {
    alert("Select a City");
    cityListElement.focus();
    return;
  }
  const signupDetails = {
    username: username.value,
    country: countryListElement.value,
    province: provinceListElement.value,
    city: cityListElement.value,
  };
  alert("Signup success");
  resetInputs();
}

function resetInputs() {
  username.value = "";
  provinceListElement.value = "";
  cityListElement.value = "";
  countryListElement.innerHTML =
    '<option value="" selected disabled>Select a Country</option>';
  cityListElement.innerHTML =
    '<option value="" selected disabled>Select a City</option>';
  provinceListElement.disabled = true;
  cityListElement.disabled = true;
  getCountryList();
}

// validation
signupElement.addEventListener("click", signupValidation);

// Init Country List on load
window.addEventListener("load", function () {
  getCountryList();
});
