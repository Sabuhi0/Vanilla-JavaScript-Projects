const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btb");

// Edit option
let editElement;
let editFlag = false;
let editID = "";

// Submit Form
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    console.log(grocery.value)
}