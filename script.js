let cart = [];

function addToCart(item) {

cart.push(item);

document.getElementById("cart-count").innerText = cart.length;

alert(item + " added to cart");

}

function openLogin() {

let name = prompt("Enter your name:");

if(name){
alert("Welcome " + name);
}

}

function viewCart(){

alert("Cart items: " + cart.join(", "));

}