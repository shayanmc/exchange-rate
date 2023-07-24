const currencyEl_one = document.querySelector("#currency-one");
const currencyEl_two = document.querySelector("#currency-two");
const amountEl_one = document.querySelector("#amount-one");
const amountEl_two = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/c579ecc4d7f5078a4acd048b/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      const rate = data.conversion_rates
      [currency_two];

      rateEl.innerHTML = `1  ${currency_one} = ${rate} ${currency_two}`;


      amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    });
}

currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_one.addEventListener("input", calculate);

// swap.addEventListener('click', () => {
//     const temp = currencyEl_one.value;
//     currencyEl_one.value = currencyEl_two.value;
//     currencyEl_two.value = temp;
//     calculate();
// });

calculate();
