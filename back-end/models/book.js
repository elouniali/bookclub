const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    author: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, unique: true },
    image: { type: String, required: true }, 
    link: { type: String, required: true },  
});

module.exports = mongoose.model('books', UserSchema);
