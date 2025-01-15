import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();  

 
  const book = {
    id: bookId,
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    description: 'Un conte philosophique sur un prince venu d\'une autre planète.',
    rating: 4.5, 
    comments: [
      { id: 1, text: 'Un livre magnifique!' },
      { id: 2, text: 'J\'ai adoré, mais la fin est triste.' },
    ],
  };

  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(book.rating);

  const handleAddComment = () => {
    if (newComment) {
      book.comments.push({ id: Date.now(), text: newComment });
      setNewComment('');
    }
  };

  const handleDeleteBook = () => {
    alert('Livre supprimé');
    navigate('/books');  
  };

  const handleEditBook = () => {
    alert('Livre modifié');
    navigate(`/edit-book/${bookId}`);  
  };

  return (
    <div className="book-details">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">Auteur: {book.author}</p>
      <p className="book-description">{book.description}</p>

      <div className="rating">
        <p>Note actuelle: {rating} / 5</p>
        <button onClick={() => setRating(rating + 0.5)}>Évaluer +</button>
        <button onClick={() => setRating(rating - 0.5)}>Évaluer -</button>
      </div>

      <div className="comments">
        <h3>Commentaires</h3>
        <ul>
          {book.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Laissez un commentaire"
        ></textarea>
        <button onClick={handleAddComment}>Ajouter un commentaire</button>
      </div>

      <div className="book-actions">
        <button onClick={handleEditBook} className="btn btn-outline">
          Modifier le livre
        </button>
        <button onClick={handleDeleteBook} className="btn btn-danger">
          Supprimer le livre
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
