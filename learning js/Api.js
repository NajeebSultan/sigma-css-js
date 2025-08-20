let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => {
  // let fact = await getFacts();
  // console.log(fact);
  // let p = document.querySelector("#result");
  // p.innerText = fact;
});


async function getImage() {
  try{
    let res = await axios.get(url2);
    return res.data.message;
  } catch(e) {
    console.log("ERROR- ", e);
    return "No image found";
  }
}