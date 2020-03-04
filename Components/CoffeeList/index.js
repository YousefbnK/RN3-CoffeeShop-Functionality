import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Container, Spinner } from "native-base";

// Store
import coffeeStore from "../../Stores/CoffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";

const CoffeeList = () => {
  if (coffeeStore.loading)
    return (
      <Container>
        <Spinner color="grey" style={{ marginTop: 250 }}></Spinner>
      </Container>
    );
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default observer(CoffeeList);
