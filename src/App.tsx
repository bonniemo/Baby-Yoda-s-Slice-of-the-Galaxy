import { useState } from "react";
import "./App.scss";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import Hero from "./Components/Hero/Hero";
import CreatePizza from "./CreatePizza";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <GlobalContextProvider>
        <Hero setCartVisible={setCartVisible} cartVisible={cartVisible}/>
        <CreatePizza cartVisible={cartVisible}/>
      </GlobalContextProvider>
    </>
  );
};

export default App;
