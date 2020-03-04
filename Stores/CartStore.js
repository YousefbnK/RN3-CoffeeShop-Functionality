import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemsToCart = item => {
    const found = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (found) {
      found.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = item => {
    const found = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (found) {
      if (item.quantity <= 1) {
        this.items = this.items.filter(_item => _item != item);
      } else {
        found.quantity -= 1;
      }
    }
  };

  checkoutCart = () => (this.items = []);

  // noOfItems = () => {
  //   const quantity = this.items.map(item => item.quantity);
  //   let sum = quantity.reduce((a, b) => {
  //     return a + b;
  //   }, 0);

  //   return sum;
  // };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
