var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//console.log(button);
//console.log(cat);

button.addEventListener("click", function() {
   cat.classList.add("show");
});
