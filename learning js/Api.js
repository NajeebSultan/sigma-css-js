let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("p");
  p.innerText = fact;
});


let url = "https://catfact.ninja/fact";
async function getFacts() {
  try{
    let res = await axios.get(url);
    return res.data.fact;
  } catch(err) {
    console.error("ERROR- ", err);
    return "No fact found";
  }
}