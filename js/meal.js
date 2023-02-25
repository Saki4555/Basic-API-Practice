const loadMeal = (searchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    console.log(meals);
    const mealContainer = document.getElementById('meals-container');
        mealContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col', 'shadow-lg');
        mealDiv.innerHTML = `
        <div class="card">
                    <img class="container mx-auto w-75 mt-4" src="${meal.strMealThumb
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadMealDetails('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
    Details
  </button>
                    </div>
                  </div>
        `

        mealContainer.appendChild(mealDiv);
    });

    
}


const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
   
    loadMeal(searchText);
}

const loadMealDetails = idMeal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then(data => displayModalDetails(data.meals[0]))
    .catch(error => {
        console.log(error)
    })
   
}

// async and await example
/*
const loadMealDetails2 = async(idMeal) =>{
   try{
    const res = await  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const data = await res.json();
    displayModalDetails(data.meals[0]);
   }

   catch(error){
    console.log(error);
   }
   
}
*/

const displayModalDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
}

loadMeal('fish');