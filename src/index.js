//Global variables
const URL = "http://localhost:3000/ducks";
let selectedDuck; //for stretch

//Fetch
// window.addEventListener("DOMContentLoaded", (event) => {
//      fetch(URL)
//     .then(res => res.json())
//     .then(json => {
//         for(let counter = 0; counter < json.length; counter++) {
//             //iterate
//             const imgUrl = json[counter].img_url
//             //const duckID = json[counter].id;
//             renderInNav(imgUrl)
//         }
//     })
//   });
//Dom Selectors
const duckNav = document.querySelector("#duck-nav");
const duckDisplayName = document.querySelector("#duck-display-name");
const duckDisplayImage = document.querySelector("#duck-display-image");
const duckDisplayLikes = document.querySelector("#duck-display-likes");
const newDuckForm = document.querySelector("#new-duck-form");
//const ducklikes = document.querySelector('likes')


  function getAllDucks(url){
    return fetch(url).then((res) => res.json());
  }
 

//Event Listeners
//duckNav.addEventListener('click', renderDuckDetail)

duckDisplayLikes.addEventListener("click", handleAddLikes)
newDuckForm.addEventListener("submit", handleDuckSumbit)

//Event Handlers
function handleAddLikes(){
  selectedDuck.likes += 1
  renderDuckInDisplay(selectedDuck);
}

function handleDuckSumbit(e){   
  e.preventDefault()
  const input = document.querySelector('#duck-nav')
  const name = e.target["duck-name-input"].value
  const img_url = e.target["duck-image-input"].value
  const newDuck = {
    name,
    img_url,
    likes: 0
 //I don't know
}; 
renderOneDuckInNav(newDuck) //adds duck to nav
e.target.reset() //clears form for the next one
}

//Render Functions
function renderAllDucksInNav(duckArr) {
  duckArr.forEach(renderOneDuckInNav);

}
function renderOneDuckInNav(duckObj){
  const duckImg = document.createElement('img');
  duckImg.src = duckObj.img_url
  duckImg.addEventListener('click', () => renderDuckInDisplay(duckObj));
  duckNav.append(duckImg)
}
function renderDuckInDisplay(duckObj) {
  selectedDuck = duckObj;
  duckDisplayName.textContent = duckObj.name
  duckDisplayImage.src = duckObj.img_url
  duckDisplayLikes.textContent = `${duckObj.likes} likes`
// do we need a separate function for fetching 
//the duck object corresponding to the ID? to return duck name when clicked 
}




//increment the number of likes
//Initializer
getAllDucks(URL).then((duckArr) => {
  renderAllDucksInNav(duckArr);
})