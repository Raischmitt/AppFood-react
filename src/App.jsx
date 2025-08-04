import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextPrivider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextPrivider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextPrivider>
  );
}

export default App;
