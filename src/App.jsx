import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextPrivider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextPrivider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextPrivider>
  );
}

export default App;
