import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";
import cartStore from "../../Stores/CartStore";

const CartItem = ({ item }) => {
  deleteItem = () => cartStore.removeItemFromCart(item);
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.drink}> {item.drink} </Text>
        <Text note style={styles.option}>
          {item.option}
        </Text>
      </Left>
      <Body>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={deleteItem}>
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
