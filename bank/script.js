"use strict";

const account1 = {
  owner: "Liton Islam",
  movements: [200, -400, 300, 500, -350, 1200],
  interestRate: 122,
  pin: 111,
};

const account2 = {
  owner: "Sadia Akter",
  movements: [500, 300, -200, 450, -100],
  interestRate: 100,
  pin: 222,
};

const account3 = {
  owner: "Hasan Mahmud",
  movements: [1000, -500, 700, 200, -300],
  interestRate: 110,
  pin: 333,
};

const account4 = {
  owner: "Farhana Rahman",
  movements: [250, -100, 400, -150, 600],
  interestRate: 105,
  pin: 444,
};

const account5 = {
  owner: "Zahidul Islam",
  movements: [800, -200, 300, -100, 500],
  interestRate: 95,
  pin: 555,
};

const account6 = {
  owner: "Mitu Akter",
  movements: [600, -300, 400, -250, 700],
  interestRate: 115,
  pin: 666,
};

// Grouping all accounts in an array
const accounts = [account1, account2, account3, account4, account5, account6];

const labelWellcome = document.querySelector(".wellcome");
const labelDate = document.querySelector(".date");
const labelBlance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterst = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const displayMovments = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovments(account1.movements);

const calcPrintBlance = function(movements){
  const blacne = movements.reduce((acc,curentValue) => acc + curentValue,0);
  labelBlance.textContent = `${blacne}EUR`
}
calcPrintBlance(account1.movements)