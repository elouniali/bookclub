const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');  

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Mot de passe haché (inscription) :', hashedPassword);  

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    console.log('Utilisateur enregistré :', newUser);

    res.status(201).json({ message: 'Utilisateur enregistré avec succès', user: newUser });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'enregistrement de l\'utilisateur.' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
    console.log(user)

    console.log('Mot de passe entré (connexion) :', password);
    console.log('Mot de passe haché en base :', user.password);

    const isMatch = await bcrypt.compare(password, user.password);  
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Authentification réussie', token });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la connexion.' });
  }
};

module.exports = { register, login };
