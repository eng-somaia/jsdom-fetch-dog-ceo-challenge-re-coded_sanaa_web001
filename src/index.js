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
let selectBar = document.getElementById("breed-dropdown");
let breedsArray = [];

fetch(breedUrl)
.then(response => response.json())
.then(data => {
  for (const property in data.message){
    let li = document.createElement("li")
    li.innerHTML = property;
    //ulBreeds.appendChild(li);
    breedsArray.push(li)
    //Challenge 3
    li.addEventListener("click", () => {
      li.style.color = "blue";
    })
  }
  //Challenge 4

})
if (selectBar.value === "a"){
  console.log(selectBar.value)

  let a = breedsArray.filter(li => {
  if (li.innerHTML.charAt(0) === "a")
  return li;
  console.log(li)
  })
  a.forEach(ele => ulBreeds.appendChild(ele))

}
else if (select.value === "b"){
 let b = breedsArray.filter(li => {
if (li.charAt(0) === "b")
return ulBreeds.appendChild(li);
})
b.forEach(ele => ulBreeds.appendChild(ele))

}
else if (select.value === "c"){
 breedsArray.filter(li => {
if (li.charAt(0) === "c")
return li;
})
}
else if (select.value === "d"){
 breedsArray.filter(li => {
if (li.charAt(0) === "d")
return li;
})
}
});
