var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//console.log(button);
//console.log(cat);

button.addEventListener("click", function() {
   if (cat.classList.contains("show")) {
      cat.classList.remove("show");
      button.innerText = "Wait, come back!";
      button.classList.add("disappear");
      //console.log("no");
   } else {
      cat.classList.add("show");
      button.innerText = "Shoo cat!!";
      button.classList.remove("disappear");
      //console.log("yes")
   }
});
