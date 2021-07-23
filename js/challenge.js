

window.addEventListener('DOMContentLoaded', startCounter)
let intervalCount;
let playing = true;
const pause = document.querySelector('#pause')
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const likesList = document.querySelectorAll('.likes')[0];
const form = document.querySelector('#comment-form');
const formSubmit = document.querySelector('#submit');
const likesObj = {}
pause.addEventListener('click', handlePause)
plus.addEventListener('click', incrementCount)
minus.addEventListener('click', decrementCount)
heart.addEventListener('click', handleLikes)
form.addEventListener('submit', handleComments)

function startCounter(){
  intervalCount = setInterval(incrementCount, 1000);
}

function incrementCount(){
  let start = document.querySelector('#counter')
  let nextCount = parseInt(start.textContent) + 1
  start.textContent = nextCount
}

function decrementCount(){
  let start = document.querySelector('#counter')
  let nextCount = parseInt(start.textContent) - 1
  start.textContent = nextCount
}

function handlePause(){
  if (playing === true){
    clearInterval(intervalCount);
    playing = false;
    pause.textContent = "Resume"
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    formSubmit.disabled = true 
  }else{
    startCounter();
    playing = true;
    pause.textContent = "Pause"
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false; 
    formSubmit.disabled = false
  } 
}

function handleLikes(){
  const counter = document.querySelector('#counter')
  const counterVal = parseInt(counter.textContent)
  // li.textContent = counterVal
  if(likesObj[counterVal] >= 1){
    likesObj[counterVal] += 1
    modifyLikeList(counterVal)
  } else {
    likesObj[counterVal] = 1
    createLikesList(counterVal)
  }
  // li.textContent = `The number ${counterVal} has ${likesObj[counterVal]}likes!`
}
function createLikesList(key){
  //create a list with the number of keys in obj
  const li = document.createElement('li')
  li.id = key
  li.textContent = `${key} has been liked once.`
  document.querySelectorAll('.likes')[0].appendChild(li)
}

function modifyLikeList(key){
  const li = document.getElementById(key)
  li.textContent = `${key} has been liked ${likesObj[key]} times!`
}

function handleComments(e){
  e.preventDefault();
  let comment = document.querySelector('#comment-input')
  let li = document.createElement('li')
  li.textContent = comment.value
  document.querySelector('#list').appendChild(li)
  comment.value = null
}





