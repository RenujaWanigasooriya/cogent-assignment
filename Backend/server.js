const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
