import React from "react";
import { Link } from "react-router-dom";  
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        
        <div className="logo">
          <Link to="/">📚 BookClub</Link>  
        </div>
        
        <nav className="nav">
          <Link to="/">Accueil</Link> 
          <Link to="/books">Ajout livres</Link>
          <Link to="/discussions">Discussions</Link>
          <Link to="/about">livre</Link>
        </nav>

        <div className="buttons">
          <Link to="/login" className="btn btn-outline"> 
            Connexion
          </Link>
          <Link to="/signup" className="btn btn-primary">
            S'inscrire
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
