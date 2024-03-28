import "./App.scss";
import Cart from "./Components/Cart";
import GlobalContextProvider from "./Components/GlobalContextProvider";
import CreatePizza from "./CreatePizza";


const App = () => {
  return (
    <GlobalContextProvider>
      <CreatePizza/>
      <Cart />
    </GlobalContextProvider>
  );
};

export default App;
