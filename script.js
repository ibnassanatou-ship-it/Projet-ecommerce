let products = []; 
let cart = [];     

const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


productForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  
  const name = document.getElementById("productName").value;
  const desc = document.getElementById("productDesc").value;
  const price = parseFloat(document.getElementById("productPrice").value);

  
  const product = { id: Date.now(), name, desc, price };

 
  products.push(product);

  
  displayProducts();

  productForm.reset();
});


function displayProducts() {
  productList.innerHTML = ""; 

  products.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p><b>${p.price} CFA</b></p>
      <button onclick="addToCart(${p.id})">Ajouter au Panier</button>
    `;
    productList.appendChild(div);
  });
}


function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  displayCart();
}


function displayCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((c, index) => {
    total += c.price;
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h4>${c.name}</h4>
      <p>${c.price} CFA</p>
      <button onclick="removeFromCart(${index})">Supprimer</button>
    `;
    cartList.appendChild(div);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}


function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}
