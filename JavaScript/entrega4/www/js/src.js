"use strict";

const catalogue = ["T-shirt", "jeans", "jacket", "snikers"];
const price = [25, 55, 80, 65];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static createCatalogue(catalogue, price) {
    return catalogue.map((name, index) => {
      return new Item(name, price[index]);
    });
  }
}

class CartItem {
  units = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.units++;
  }
}

class User {
  #cart = [];
  constructor(userName) {
    this.userName = userName;
  }
  newList(catalogue, price) {
    this.#cart = Item.createCatalogue(catalogue, price);
  }
  addToCart(item) {
    for (let i = 0; i < this.#cart.length; i++) {
      if (item.name === this.#cart.item.name) {
        return new CartItem.increase();
      }
    }
  }
  fillCart(ammount, catalogue) {
    for (let i = 0; i < ammount; i++) {
      const itemIndex = Math.floor(Math.random() * catalogue.length);
      this.addToCart(catalogue[itemIndex]);
      // this.#cart.push(new Item());
    }
  }
  pay(store) {
    store.checkout(this.#cart);
  }
}

class Shop {
  constructor(name) {
    this.name = name;
  }
}

const myItem = Item.createCatalogue(catalogue, price);
console.log(myItem);
const myUser = new User("Pepiño");
console.log(myUser, myUser.newList(catalogue, price));
const myShop = new Shop("Indistex");

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////* EJERCICIO ASYNC AWAY *///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

async function getDataFromServer(url) {
  return await (await fetch(url)).json();
}
getDataFromServer("https://api.exchangerate-api.com/v4/latest/EUR").then(
  data => {
    console.log(
      `El valor de ${data.rates.EUR * 25}€ son ${25 * data.rates.USD} $`
    );
  }
);
async function getDataFromServer2(url) {
  return await (await fetch(url)).json();
}
let dollarValue = 25 * data.rates.USD;
getDataFromServer("https://api.exchangerate-api.com/v4/latest/USD").then(
  data => {
    console.log(`Y a su vez este valor euivale a ${27.194 * data.rates.JPY} ¥`);
  }
);
