import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <>
    <Routes>  
      <Route path="/" exact element={<ProductListing/>}/>
      <Route path="/product/:productId"  element={<ProductDetail/>}/>
      <Route>404 Not found!</Route>
      </Routes>
    </>
  );
}

export default App;
