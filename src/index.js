  //Global variables
  const URL = "http://localhost:3000/ducks"
  let selectedDuck;

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
  function getAllDucks(url){
    return fetch(url)
    .then(res => res.json())
  }
 
//Dom Selectors
  const duckNav = document.querySelector("#duck-nav")
  const duckName = document.querySelector("#duck-display-name")
  const duckDetailImg = document.querySelector("#duck-display-image")
  const duckLikesButton = document.querySelector("#duck-display-likes")
  const form = document.querySelector("new-duck-form")
  const ducklikes = document.querySelector('likes')


//Event Listeners
//duckNav.addEventListener('click', renderDuckDetail)
//form.addEventListener('submit', addNewDuck)
//duckLikesButton.addEventListener('click,' addLikes)

//Event Handlers
function addLikes(e){
  e.preventDefault()
  console.dir(e.target)
  console.log('duckLikes:', duckLikes.value);
  const newLike = parseInt(duckLikes.value)
  selectedDuck.likes += newLike
  renderDetail (selectedDuck)
}
//Render Functions
function renderInNav(duckObj) { //or is it function renderInNav(imgUrl) {
    const duckImg = document.createElement('img');
    duckImg.src = duckObj.img_url
    duckImg.addEventListener('click', () => {renderDuckDetail(duckObj)})
    document.querySelector("#duck-nav").appendChild(duckImg)
}

function renderDuckDetail(duckObj) {
  selectedDuck = duckObj;
  duckName.textContent = duckObj.name
  duckDetailImg.src = duckObj.image_url
// do we need a separate function for fetching 
//the duck object corresponding to the ID? to return duck name when clicked 
}

function addNewDuck(e){
  e.preventDefault()
  const input = document.querySelector('#duck-nav')
  //I don't know
}
//increment the number of likes
//Initializer
getAllDucks(URL).then(duckArr => {
  renderDuckDetail(duckArr[0]);
  duckArr.forEach(renderInNav)
  duckName.innerHTML = ''
  //duckDetailImg.img_url = ''
})