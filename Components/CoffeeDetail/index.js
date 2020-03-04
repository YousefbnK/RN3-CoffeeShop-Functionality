import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

//Stores
import coffeeStore from "../../Stores/CoffeeStore";

// Style
import styles from "./styles";

//List
import CartButton from "../Buttons/CartButton";
import cartStore from "../../Stores/CartStore";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappucino",
    option: "small",
    quantity: 1
  };

  changeDrink = value =>
    this.setState({
      drink: value
    });

  changeOption = value =>
    this.setState({
      option: value
    });

  submitItems = () => {
    cartStore.addItemsToCart(this.state);
    this.setState({ quantity: 1 });
  };

  render() {
    const coffeeshopID = this.props.navigation.getParam("coffeeshopID");
    const coffeeshop = coffeeStore.coffeeshops.find(
      coffeeshop => coffeeshopID === coffeeshop.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {coffeeshop.name + "\n"}
                  <Text note>{coffeeshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: coffeeshop.img }} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeDrink}
                  placeholder="Choose Drink"
                >
                  <Picker.Item label="Cappuccino" value="Cappuccino" />
                  <Picker.Item label="Latte" value="Latte" />
                  <Picker.Item label="Espresso" value="Espresso" />
                </Picker>
              </Left>
              <Body>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeOption}
                  placeholder="Choose Option"
                >
                  <Picker.Item label="Small" value="Small" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Large" value="Large" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  minValue={1}
                  value={this.state.quantity}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button
                  full
                  style={styles.addButton}
                  onPress={this.submitItems}
                >
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("coffeeshopName"),
  headerRight: <CartButton />
});

export default observer(CoffeeDetail);
