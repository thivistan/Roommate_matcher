const express = require('express');
const dotenv = require('dotenv');
const generateProfile = require('./routes/generateProfile');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/generate-profile', generateProfile);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
