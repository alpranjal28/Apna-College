let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("#new");
let btn2 = document.querySelector("#newD");

async function getFacts() {
    try {
        console.log("button clicked");
        let resp = await axios.get(url);
        return resp.data.fact;
    } catch (err) {
        console.log("error - ", err);
    }
}

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

async function getImg() {
    try {
        console.log("button2 clicked");
        let resp = await axios.get(url2);
        return resp.data.message;
    } catch (err) {
        console.log("error - ", err);
    }
}

btn2.addEventListener("click", async () => {
    let link = await getImg();
    // console.log(img);
    let img = document.querySelector("#picture");
    img.setAttribute("src", link);
    console.log(link);
});
