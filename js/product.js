


let products={
    data:[
      {
        category:"alphabet",
        productName:"Animal theme",
        price:"56",
        image:"../images/alphabet/animal.png"
      },
      {
        category:"alphabet",
        productName:"Assorted cards",
        price:"46",
        image:"../images/alphabet/assorted.png"
      },
      {
        category:"alphabet",
        productName:"Fruits & Vegies",
        price:"67",
        image:"../images/alphabet/fruits.png"
      },
      {
        category:"alphabet",
        productName:"Nature theme",
        price:"89",
        image:"../images/alphabet/nature.png"
      },
      {
        category:"alphabet",
        productName:"Plain cards",
        price:"75",
        image:"../images/alphabet/plain.png"
      },
      {
        category:"math",
        productName:"Addition",
        price:"63",
        image:"../images/math/addition.png"
      },
      {
        category:"math",
        productName:"Counting Fingers",
        price:"86",
        image:"../images/math/counting.png"
      },
      {
        category:"math",
        productName:"Division cards",
        price:"69",
        image:"../images/math/division.png"
      },
      {
        category:"math",
        productName:"Multiplication cards",
        price:"49",
        image:"../images/math/multiplication.png"
      },
      {
        category:"math",
        productName:"subtraction",
        price:"68",
        image:"../images/math/subtraction.png"
      },
      {
        category:"math",
        productName:"Multiplication Table",
        price:"53",
        image:"../images/math/table.png"
      },
      {
        category:"science",
        productName:"Organs of the human body",
        price:"80",
        image:"../images/science/organs.png"
      },
      {
        category:"science",
        productName:"Body Parts",
        price:"97",
        image:"../images/science/parts.png"
      },
      {
        category:"science",
        productName:"The Solar System",
        price:"86",
        image:"../images/science/planets.png"
      },
      {
        category:"science",
        productName:"Parts of a plant",
        price:"74",
        image:"../images/science/plant.png"
      },
      {
        category:"science",
        productName:"Explore the space",
        price:"72",
        image:"../images/science/space.png"
      },
      {
        category:"art",
        productName:"Bunnies coloring page",
        price:"71",
        image:"../images/art/bunnies.png"
      },
      {
        category:"art",
        productName:"Dinosaurs coloring page",
        price:"89",
        image:"../images/art/dino.png"
      },
      {
        category:"art",
        productName:"Frog coloring page",
        price:"93",
        image:"../images/art/frog.png"
      },
      {
        category:"art",
        productName:"House coloring page",
        price:"91",
        image:"../images/art/house.png"
      },
      {
        category:"art",
        productName:"Mythical creature coloring page",
        price:"89",
        image:"../images/art/mythical.png"
      },
    ],
  };

// let products = {
//     data: [
//       {
//         productName: "Regular White T-Shirt",
//         category: "Topwear",
//         price: "30",
//         image: "white-tshirt.jpg",
//       },
//       {
//         productName: "Beige Short Skirt",
//         category: "Bottomwear",
//         price: "49",
//         image: "short-skirt.jpg",
//       },
//       {
//         productName: "Sporty SmartWatch",
//         category: "Watch",
//         price: "99",
//         image: "sporty-smartwatch.jpg",
//       },
//       {
//         productName: "Basic Knitted Top",
//         category: "Topwear",
//         price: "29",
//         image: "knitted-top.jpg",
//       },
//       {
//         productName: "Black Leather Jacket",
//         category: "Jacket",
//         price: "129",
//         image: "black-leather-jacket.jpg",
//       },
//       {
//         productName: "Stylish Pink Trousers",
//         category: "Bottomwear",
//         price: "89",
//         image: "pink-trousers.jpg",
//       },
//       {
//         productName: "Brown Men's Jacket",
//         category: "Jacket",
//         price: "189",
//         image: "brown-jacket.jpg",
//       },
//       {
//         productName: "Comfy Gray Pants",
//         category: "Bottomwear",
//         price: "49",
//         image: "comfy-gray-pants.jpg",
//       },
//     ],
//   };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Php " + i.price;
    container.appendChild(price);
  
    let cart = document.createElement("button");
    cart.innerText=("Add to Cart");
    cart.classList.add('addcart')
    container.appendChild(cart);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

  