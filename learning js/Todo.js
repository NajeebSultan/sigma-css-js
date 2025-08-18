let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value; 

  let delBtn = document.createElement("button");
delBtn.innerText= "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn); // Add the delete button to the item
ul.appendChild(item); // Add the new item to the list
inp.value = ""; // Clear the input field after adding the item

});

let delBtns = document.querySelectorAll(".delete");
for(delBtns of delBtns) {
  delBtns.addEventListener("click", function () {
    let par = this.parentElement; // Get the parent <li> element
    par.remove(); // Remove the <li> from the list
  });
} 