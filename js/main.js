import { modalList } from "./modal.js";
import { error } from "./alert-error.js"
import { calcIMC, notANumber } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const text = document.querySelector('.modal-wrapper h1');

form.onsubmit = function(e) {
  e.preventDefault();
  
  let weight = inputWeight.value;
  let height = inputHeight.value;

  if(notANumber(weight) || notANumber(height)) {
    console.log('erro');

    error.open();

    return;
  }

  error.close()
  
  const result = calcIMC(weight, height);

  modalList.open()
  
  text.innerText = `Seu IMC é de ${result}`;
}

inputWeight.oninput = () => {
  error.close()
}

inputHeight.oninput = () => {
  error.close()
}








