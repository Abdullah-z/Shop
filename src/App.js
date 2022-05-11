import React from "react";
import "./App.css";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
	BrowserRouter,
	Routes, 
	Route,
  } from "react-router-dom";
  import Shop from "./pages/Shop";
import CategoryShop from "./pages/CategoryShop";


function App() {
  return (
    <div className="App">
          

          <BrowserRouter>

		  <Routes>
		  
			<Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/shop/category/:id" element={<CategoryShop/>}></Route>

		 </Routes>
		</BrowserRouter>

    </div>
  );
}

export default App;
