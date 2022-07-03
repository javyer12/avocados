/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const URL = "https://platzi-avo.vercel.app/api/avo";
const BASE_URL = "https://platzi-avo.vercel.app/";
//HTML components

// const bd = document.getElementById("title_avocado");
// bd.innerHTML = " titles";

const mainTitle = document.createElement("h1");
mainTitle.textContent = " Welcome to Avocado Shop";
mainTitle.className = "mainTitle";

const text = document.createElement("p");
text.textContent = " we are glad of your visit.!!";
text.className = "text";

// const anotherShop = document.createElement("button");
// anotherShop.textContent = " Another Shop: ";
// anotherShop.className = "another_shop";

const Welcome = document.createElement("div");
Welcome.append(mainTitle, text);
Welcome.className = "Welcome_field";

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};


var Main = document.createElement("div");

async function fetchData() {
  const response = await fetch(URL);
  const Items = await response.json();
  console.log(Items);

  const AllItems = [];

  const Render = Items.data.map((item) => {
    //Item Image
    const Image = document.createElement("img");
    Image.src = `${BASE_URL}${item.image}`;
    //Item Title
    const Title = document.createElement("h2");
    Title.textContent = item.name;
    // Title.style.color = 'red';
    // Title.className = "title";
    Title.className = "text-2xl text-amber-500 ";
    //item Price
    const Price = document.createElement("div");
    Price.textContent = formatPrice(item.price);

    const ButtonBuy = document.createElement("p");
    ButtonBuy.textContent = "Buy";
    ButtonBuy.addEventListener("click", () => {
      window.alert("do you want avocados? " + "it's: " + item.price);
    });

    //container which add the items on
    const Container = document.createElement("div");
    Container.append(Title, Price, Image, ButtonBuy);
    Main.append(Container);
    AllItems.push(Welcome, Main);

    // css styles
    Container.className = "container";
    Main.className = "main";
    Price.className = "price";

    Container.addEventListener("mouseenter", () => {
      console.log("avocado");
    });
    Container.addEventListener("click", (e) => {
      if (e.target.nodeName === "H2") {
        window.alert("clicked");
      }
    });
    //agregar un modal con tailwind
  });
  document.body.append(...AllItems);
}
fetchData();

//api of intl:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
