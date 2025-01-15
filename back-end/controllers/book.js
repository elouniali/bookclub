const Book = require("../models/book");


const addBook = async (req, res) => {
  const { title, author, description, image, link } = req.body;

  
  if (!title || !author || !description || !image || !link) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }
  
  try {
   
    const newBook = new Book({ title, author, description, image, link });
    await newBook.save();
    console.log('Livre ajouté avec succès !');

    res.status(201).json(newBook);
  } catch (error) {
    console.error('Erreur lors de l\'ajout du livre :', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout du livre.' });
  }
};
// metodh'hersh commit
// hel dossier l backend f window jdid kifesh
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Erreur lors de la récupération des livres :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des livres.' });
  }
};

module.exports = { addBook, getAllBooks };
