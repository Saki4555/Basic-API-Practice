function loadCountries(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countires =>{
   
    const countryContainer = document.getElementById('country-container');

   countires.forEach(country => {
    console.log(country);

    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');

    countryDiv.innerHTML = `
    <h3>Name : ${country.name.common}</h3>
    <h5>Capital : ${country.capital ? country.capital : 'No Capital'}</h5>
    <button class="button-62" onclick="loadCountryDetals('${country.cca2}')">Details</button>
    `

    countryContainer.appendChild(countryDiv);
   })
}

const loadCountryDetals = code =>{
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = data =>{
    console.log(data);
    const detailsContainer = document.getElementById('show-details');
    detailsContainer.innerHTML =
    `<h1>Name : ${data.name.common} </h1>
    <img src="${data.flags.png}" alt="">
    `
}

loadCountries();