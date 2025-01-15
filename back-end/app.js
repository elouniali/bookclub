const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config(); 

const app = express();


app.use(cors());
app.use(bodyParser.json()); 


if (!process.env.MONGODB_URI) {
    console.error('Erreur : La variable MONGODB_URI est manquante dans le fichier .env');
    process.exit(1); 
}


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log('Connexion MongoDB réussie'))
    .catch((err) => {
        console.error('Erreur de connexion MongoDB :', err);
        process.exit(1); 
    });
    // heva m yemchich fel git howa deja mo il commit mathebch titaada
    

     app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route introuvable' });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
