var images = [
    "family.PNG",
    "Aarav.jpeg",
    "nina.jpeg",
    "mom.jpeg",
    "Papa.jpeg"
]

var names = [
    "My family",
    "Aarav Shrivastav",
    "Ananya Shrivastav",
    "Arti Shrivastav",
    "Chitrank Shrivastav"
]

var x = 0

function nextslide() {
    document.getElementById("dd5").src = images[x]
    document.getElementById("names").innerHTML = names[x];
    x++; 

if (x == 5) 
  {
    x =0;                     
}
}
