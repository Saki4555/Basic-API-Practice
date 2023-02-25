const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayRandomUser(data))
}

const displayRandomUser = user => {
    console.log(user);

    document.getElementById('location').innerText = user.results[0].location.city;
    
    document.getElementById('image').innerHTML = `
    <img src="${user.results[0].picture.large}" alt="">
    `
}

loadRandomUser();