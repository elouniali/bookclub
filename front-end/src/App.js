import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import de Router, Route et Routes
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import About from "./components/About";
import Discussion from "./components/Discussion";


const App = () => {
  return (
    <Router>
    <div>
      
      <Header />
    </div><Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<SignUp />} />  
        <Route path="/books" element={<Books />} />
        <Route path="/book/:bookId" element={<BookDetails/>} />
        <Route path="/discussions" element={<Discussion />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>

  );
};

export default App;
