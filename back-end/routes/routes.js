const express = require('express');
const { addBook, getAllBooks } = require('../controllers/book');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.post('/add', authMiddleware, addBook);

router.get('/all', getAllBooks);


router.post('/users/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
        }
        const hashedPassword = await bcrypt.hashSync(password);
        const newUser = await User.create({name:name,email:email,password:hashedPassword})
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur enregistré avec succès', user: newUser });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erreur serveur lors de l\'enregistrement de l\'utilisateur.' });
    }
});
// tjm l erreur heki thotha f chatchout lahdha

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        const isMatch =  bcrypt.compareSync(password,user.password);
    
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect.' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, 'secretkey', { expiresIn: '1h' });

        res.status(200).json({ message: 'Authentification réussie', user, token });
    } catch (error) {
        console.error('Erreur lors de l\'authentification :', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'authentification.' });
    }
});

module.exports = router;
