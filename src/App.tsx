import "./App.scss";
import Cart from "./Components/Cart";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import Hero from "./Components/Hero/Hero";
import CreatePizza from "./CreatePizza";


const App = () => {
  return (
    <>
    <Hero/>
    <GlobalContextProvider>
      <CreatePizza/>
      <Cart />
    </GlobalContextProvider>    
    </>
  );
};

export default App;
