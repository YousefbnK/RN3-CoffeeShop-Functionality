import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button, Badge, Text } from "native-base";

//Stores
import cartStore from "../../Stores/CartStore";
import BadgeIcon from "../BadgeIcon/BadgeIcon";

const CartButton = ({ navigation }) => {
  return (
    <Button
      vertical
      transparent
      onPress={() => navigation.navigate("CartScreen")}
    >
      {/* <Icon style={{ color: "white" }} name="shoppingcart" type="AntDesign" /> */}
      <BadgeIcon />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
