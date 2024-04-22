const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/find-my-business-partner';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.error('Could not connect to the database.', err);
    process.exit();
  });
