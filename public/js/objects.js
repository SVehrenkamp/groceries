var fruits = {
  title: "Fruits on Sale",
  validThrough: "May 1st, 2017",
  items: [
    {
      name: "Apple",
      price: "$1.69/lb",
      image: "images/apple.jpg"
    },
    {
      name: "Orange",
      price: "$0.99/lb",
      image: "images/orange.jpg"
    },
    {
      name: "Banana",
      price: "$0.32/lb",
      image: "images/banana.jpg"
    }
  ]
};
var vegetables = {
  title: "Vegetables on Sale",
  validThrough: "May 21st, 2017",
  items: [
    {
      name: "Carrot",
      price: "$0.99/lb",
      image: "images/carrot.jpg"
    },
    {
      name: "Lettuce",
      price: "$0.79/lb",
      image: "images/lettuce.jpg"
    },
    {
      name: "Potato",
      price: "$1.29/lb",
      image: "images/potato.jpg"
    }
  ]
};

[].forEach.call(document.getElementsByTagName('a'), function(el){
  el.addEventListener('click', function(e) {
    getProducts(e.target.dataset.type);
  });
});

var getProducts = function(type) {
  switch(type) {
    case "fruits":
      renderProducts(fruits);
      break;
    case "vegetables":
      renderProducts(vegetables);
  }
}

var renderProducts = function(foods) {
  var food_container = document.getElementById('foods');
  food_container.innerHTML = "";

  var item_tpl = `
  <h2 id="title">${foods.title}</h2>
  <h3 id="valid">valid through: ${foods.validThrough}</h4>
  <ul id="items">
    ${foods.items.map((item) => {
      return `
      <li class="product">
        <img class="image" src="${item.image}" width="100" height="100" />
        <h4 class="name">${item.name}</h4>
        <p class="price">${item.price}</p>
        <button class="btn btn-success">Order ${item.name}</button>
      </li>
      `
    }).join('')}
  </ul>
  `;
  return food_container.innerHTML = item_tpl;
}
