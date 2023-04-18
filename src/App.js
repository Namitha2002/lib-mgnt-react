import React from "react";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Register from "./pages/Register";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/BookList" element={<BookList></BookList>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Favorite" element={<Favorite></Favorite>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
