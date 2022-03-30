import './App.css';
import Home from './component/Home';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Restaurent from './component/Restaurent';
import NotAvailable from './component/NotAvailable';
import MealDetails from './component/MealDetails';
function App() {
  return (
    <div className="App">
          <Header></Header>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home/:mealdb" element={<MealDetails/>} />

        <Route path="/restaurent" element={<Restaurent/>} />
        <Route path="/meal-details" element={<MealDetails/>} />
        <Route path="*" element={<NotAvailable/>} />
      </Routes>
      {/* <Header></Header> */}
       {/* <Home/> */}

    </div>
  );
}

export default App;
