import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

//Stores
import cartStore from "../../Stores/CartStore";

// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  checkout = () => {
    cartStore.checkoutCart();
    alert("Thank you for your Patronage");
  };

  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.checkout}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CoffeeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoffeeCart);
