import { Fragment, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShowHandler = () => {
    setCartIsShown(true)
  }

  const cartHideHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onCartHide={cartHideHandler} />}
      <Header onCartShow={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
