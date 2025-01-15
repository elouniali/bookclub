import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Tous les champs sont obligatoires.");
      return;
    }

    try {
      
      const response = await axios.post("http://localhost:5000/api/users/login", { email, password });
      console.log(response)
      
      const token = response.data.token;
      
      
      localStorage.setItem("token", token);
      
       alert("Connexion réussie !");
      navigate("/about")
    } catch (error) {
      console.error( error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "Erreur inconnue");
      } else {
        setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Gérer le changement du champ mot de passe
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Connexion
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Afficher un message d'erreur si présent */}
        <p className="redirect">
          Pas encore inscrit ? <Link to="/signup">Créer un compte</Link> {/* Lien vers la page d'inscription */}
        </p>
      </div>
    </div>
  );
};

export default Login;