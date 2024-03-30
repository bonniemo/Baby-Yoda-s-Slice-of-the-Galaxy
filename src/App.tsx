import { useState } from "react";
import "./App.scss";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import Hero from "./Components/Hero/Hero";
import CreatePizza from "./Components/CreatePizza";
import Nav from "./Components/Nav/Nav";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <GlobalContextProvider>
        <Hero />
        <Nav setCartVisible={setCartVisible} cartVisible={cartVisible} />
        <CreatePizza cartVisible={cartVisible} />
      </GlobalContextProvider>
    </>
  );
};

export default App;
