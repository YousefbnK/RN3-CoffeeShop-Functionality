import { decorate, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  coffeeshops = [];
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      this.coffeeshops = res.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
