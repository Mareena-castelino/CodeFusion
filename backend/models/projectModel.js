const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://21f28mareena:Xkhjnp3j1AV1QDCA@cluster0.la5a5.mongodb.net/'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
}); 
const projectSchema = new mongoose.Schema({
    title: String,
    createdBy: String,
    date: {
      type: Date,
      default: Date.now
    },
    htmlCode: {
      type: String,
      default: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      
      </body>
      </html>`
    },
    cssCode: {
      type: String,
      default: `
      body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }`
    },
    jsCode: {
      type: String,
      default: 'console.log("Hello World")'
    }
});
  
module.exports = mongoose.model("Project", projectSchema);