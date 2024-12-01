const mongoose = require('mongoose');

const mongoURI= 'mongodb+srv://21f28mareena:Xkhjnp3j1AV1QDCA@cluster0.la5a5.mongodb.net/'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

let userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    date:{
      type: Date,
      default: Date.now
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
});
module.exports = mongoose.model('User', userSchema); 
  