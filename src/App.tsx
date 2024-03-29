import { useState } from "react";
import "./App.scss";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import Hero from "./Components/Hero/Hero";
import CreatePizza from "./CreatePizza";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <>
      <Hero setCartVisible={setCartVisible} cartVisible={cartVisible} />
      <GlobalContextProvider>
        <CreatePizza cartVisible={cartVisible}/>      
      </GlobalContextProvider>
    </>
  );
};

export default App;
