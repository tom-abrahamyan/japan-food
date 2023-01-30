import React, {useState} from "react";
import './App.css';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";

function App() {

  const [cartIsVisible,setCartVisible] = useState(false);

  const showCartHandler = () => {
      setCartVisible(true);
  }

  const hideCartHandler = () => {
      setCartVisible(false);
  }

  return (
      <>
          <CartContextProvider>
              {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
              <Header onShowCart={showCartHandler}/>
              <main>
                  <Meals/>
              </main>
          </CartContextProvider>
      </>
  );
}

export default App;
