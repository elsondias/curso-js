// SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// FUNÇÕES
const createTable = (number, multiplicationNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicationNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
        <div class="operaiton">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number
};

// EVENTOS
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  createTable(multiplicationNumber, multiplicatorNumber);
});
