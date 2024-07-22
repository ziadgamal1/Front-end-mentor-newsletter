"use strict";
const container = document.querySelector(".container");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const button1 = document.querySelector(".button--1");
const button2 = document.querySelector(".button--2");
const msg = document.querySelector(".message");
const html = `<label class="error-msg ">Valid email required</label>`;
const error = document.querySelector(".error");
const email = document.querySelector(".email");
let errorMsg;
let hasInsertedHTML = false;
button1.addEventListener("click", function (e) {
  e.preventDefault();
  let value = input.value;
  if (value.includes("@") && value.length > 12) {
    container.classList.toggle("none");
    msg.classList.toggle("none");
    email.innerHTML = `</br><strong>${value}</strong>`;
    value = "";
  } else if (!hasInsertedHTML) {
    error.innerHTML = `<label>Email address:</label><label class="error-msg ">Valid email required</label>`;
    errorMsg = document.querySelector(".error-msg");
    input.style.backgroundColor = "#fee9e6";
  } else {
    alert("stop right there");
  }
});

button2.addEventListener("click", function (e) {
  e.preventDefault();
  if (errorMsg) {
    errorMsg.classList.add("none");
    input.style.backgroundColor = "transparent";
  }
  input.value = "";
  msg.classList.toggle("none");
  container.classList.toggle("none");
});
