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

ul.addEventListener("click", function (event) {
  if (event.target.nodeName =="BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove(); // Remove the list item when the delete button is clicked
    console.log("deleted");
  }
});
