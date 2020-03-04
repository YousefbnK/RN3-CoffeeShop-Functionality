import React, { Component } from "react";
import IconBadge from "react-native-icon-badge";
import { View, Text } from "react-native";
import { Thumbnail } from "native-base";

//Stores
import cartStore from "../../Stores/CartStore";
import { observer } from "mobx-react";

class BadgeIcon extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right"
        }}
      >
        <IconBadge
          MainElement={
            <Thumbnail
              source={require("../../assets/images/cartIcon.jpg")}
              name="shoppingcart"
              type="AntDesign"
              style={{
                width: 40,
                height: 40,
                margin: 6
              }}
            />
          }
          BadgeElement={
            <Text style={{ color: "#FFFFFF" }}>{cartStore.quantity}</Text>
          }
          IconBadgeStyle={{ width: 20, height: 20, backgroundColor: "red" }}
          Hidden={cartStore.quantity == 0}
        />
      </View>
    );
  }
}

export default observer(BadgeIcon);

// source={require("../../assets/images/cartIcon.jpg")}
