import './style.css';

const dados = fetch('https://api.exchangerate.host/latest')
  .then((Response) => Response.json())
  .then((data) => {
    return data;
  });
console.log(dados);

const campoDeText = document.querySelector('#campoDeText');
const buttonActive = document.querySelector('button');
const creatDivs = (qnt) => {
  const valores = document.querySelector('#valoresConvertidos');
  for (let index = 0; index < qnt; index += 1) {
    const divs = document.createElement('div');
    divs.classList.add('valorInvalor');
    valores.appendChild(divs);
  }
};
buttonActive.addEventListener('click', () => {
  const quantity = Object.values(dados.rates).length;
  creatDivs(quantity);
  const moeda = campoDeText.value;
  const url = `https://api.exchangerate.host/latest?base=${moeda}`;
  console.log(url);
});
