document.addEventListener("DOMContentLoaded", () => {


fetch("http://localhost:3000/pups")
.then((res) => res.json())
.then(data => data.forEach(pup => buildMyBar(pup)))

function buildMyBar(pup){
const divBar = document.getElementById("dog-bar")
const span = document.createElement("span")
span.textContent = pup.name
divBar.appendChild(span)
const img = document.createElement("img")
img.src = pup.image
const h2 = document.createElement("h2")
h2.textContent= pup.name
const button = document.createElement("button")
let text;
if (pup.isGoodDog === true)
text = "Good Dog"
else
text ="Bad Dog"
button.textContent = text
const divInfo = document.getElementById("dog-info")


span.addEventListener("click", (e) => {
divInfo.innerHTML = ""
divInfo.appendChild(img)
divInfo.appendChild(h2)
divInfo.appendChild(button)
} )

}
})