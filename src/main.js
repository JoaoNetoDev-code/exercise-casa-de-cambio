import './style.css';

const buttonActive = document.querySelector('button');
const campoDeText = document.querySelector('#campoDeText');
const textoApresenta = document.querySelector('h2');

const creatDivs = (qnt) => {
  const valores = document.querySelector('#valoresConvertidos');
  for (let index = 0; index < qnt; index += 1) {
    const divs = document.createElement('div');
    divs.classList.add('valorInvalor');
    valores.appendChild(divs);
  }
};

const dados = (urls) => {
  return fetch(urls)
    .then((Response) => Response.json())
    .then((data) => {
      /// magica ak.
      console.log(data);
      // btnFunction(data);
    });
};

// const btnFunction = () => {

// };
buttonActive.addEventListener('click', () => {
  const quantity = Object.values(data.rates).length;
  creatDivs(quantity);
  const moeda = campoDeText.value;
  const url = `https://api.exchangerate.host/latest?base=${moeda}`;
  dados(url);
});
