import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./About.css";

const About = () => {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(''); 
  const [token,setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if(!token){setError("user not logged In")}
        const response = await axios.get('http://localhost:5000/api/all');
        setBooks(response.data);
        setLoading(false); 
      } catch (error) {
        setError('Erreur lors de la récupération des livres.');
        setLoading(false); 
      }
    };

    fetchBooks();
  }, []); 

  return (
    <div className="about">
      

      
      <div className="book-grid">
        {loading ? (
          <p>Chargement des livres...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book._id}>
              <img
                src={book.image || "https://via.placeholder.com/150"}
                alt={book.title}
                className="book-image"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Auteur: {book.author}</p>
              <a
                href={book.link}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                En savoir plus
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
