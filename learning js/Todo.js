let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value; 
  ul.appendChild(item); // Add the new item to the list
  inp.value = ""; // Clear the input field after adding the item

});
