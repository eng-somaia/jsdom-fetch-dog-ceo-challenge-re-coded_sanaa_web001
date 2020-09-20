console.log('%c HI', 'color: firebrick')
//Challenge 1
document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let imgDiv = document.getElementById('dog-image-container');

  fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    data.message.forEach(item => {
      let img = document.createElement("img");
      img.src = item;
      img.alt = "Dogs imgs";
      imgDiv.appendChild(img);
    })
  })
//Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let ulBreeds = document.getElementById('dog-breeds');
let select = document.getElementById("breed-dropdown");

fetch(breedUrl)
.then(response => response.json())
.then(data => {
  for (const property in data.message){
    let li = document.createElement("li")
    li.innerHTML = property;
    li.className = "breed-item";
    ulBreeds.appendChild(li);
    //Challenge 3
    li.addEventListener("click", () => {
      li.style.color = "blue";
    })
  }
  //Challenge 4
let breedsArray = document.getElementsByClassName("breed-item");
  if (select.value === "a"){
breedsArray.filter(li => {
  let string = li.innerHTML;
  return string.charAt(0) === "a";
})
}
    ulBreeds.appendChild(li);
})


});
