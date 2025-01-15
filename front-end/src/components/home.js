import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

const Home = () => {
  const staticBooks = [
    {
      _id: "9782075128063-1",
      title: "Les Misérables ",
      author: "Victor Hugo",
      image: "https://resizing.flixster.com/1zLOrsw_MLsSBZqw8mpjTbdpUQE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY5MDI2ZTQ5LTU2NDItNDBiZC04OTJiLWRkYTdkOWIyN2VmNC5qcGc=",
      link: "https://www.alkitab.tn/livre/9782075128063-les-miserables-victor-hugo/" 
    },
    {
      _id: "9782075128063-2",
      title: "educated",
      author: "Tara Westover",
      image: "https://m.media-amazon.com/images/I/71N2HZwRo3L.jpg",
      link: "https://www.culturel.tn/educated-9780099511021.html"
    },
    {
      _id: "9782075128063-3",
      title: "harry poter",
      author: "J. K. Rowling",
      image: "https://images.epagine.fr/585/9781526626585_1_75.jpg",
      link: "https://www.alkitab.tn/livre/9781526626585-harry-potter-and-the-philosopher-s-stone-j-k-rowling/"
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Bienvenue à <span className="highlight">BookClub</span>
          </h1>
          <p className="hero-text">
            Explorez des livres captivants, partagez vos avis et connectez-vous avec des lecteurs du monde entier.
          </p>
          <Link to="/signup" className="btn btn-primary">
            Rejoindre maintenant
          </Link>
        </div>
      </section>

      <section className="featured-books">
        <div className="container">
          <h2 className="section-title">Livres populaires</h2>

          <div className="book-grid">
            {staticBooks.map((book) => (
              <div className="book-card" key={book._id}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Auteur: {book.author}</p>
                <a href={book.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community">
        <div className="container">
          <h2 className="section-title">Rejoignez notre communauté</h2>
          <p className="community-text">
            Discutez des livres que vous aimez avec d'autres passionnés et découvrez des joyaux littéraires.
          </p>
          <Link to="/discussions" className="btn btn-outline">
            Voir les discussions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
