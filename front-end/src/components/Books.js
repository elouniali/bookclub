import React, { useState } from 'react';
import axios from 'axios';
import './Books.css';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '', 
    link: ''  
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.description && formData.image && formData.link) {
      try {
        const response = await axios.post('http://localhost:5000/api/add', formData);
        console.log('Livre ajouté avec succès :', response.data);

        alert('Livre ajouté avec succès !');

        setFormData({
          title: '',
          author: '',
          description: '',
          image: '',
          link: ''
        });
      } catch (error) {
        console.error('Erreur lors de l\'ajout du livre:', error);
        setErrorMessage('Erreur lors de l\'ajout du livre. Veuillez réessayer.');
      }
    } else {
      setErrorMessage('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="add-book-form" style={{ marginLeft: '100px', marginRight: '100px' }}>
      <h3>Ajouter un livre</h3>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Entrez le titre du livre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Auteur</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Entrez l'auteur du livre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Entrez une brève description du livre"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">URL de l'image du livre</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Entrez l'URL de l'image du livre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="link">Lien d'informations</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Entrez le lien pour plus d'informations"
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default AddBookForm;
