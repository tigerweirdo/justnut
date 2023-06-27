require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // CORS'un uygulanmasını sağlar.

const port = 5000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbname = process.env.MONGODB_DBNAME;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.cutmm6z.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

// E-posta adreslerini depolamak için bir Mongoose modeli tanımla
const Email = mongoose.model('Email', new mongoose.Schema({
  address: String
}));

app.use(express.json());

app.post('/api/newsletter', async (req, res) => {
  const email = req.body.email;

  if (email) {
    console.log(`E-posta alındı: ${email}`);

    // E-posta adresini veritabanına kaydet
    const newEmail = new Email({ address: email });
    await newEmail.save();

    res.status(200).send('E-posta alındı ve veritabanına kaydedildi!');
  } else {
    res.status(400).send('E-posta gönderilmedi!');
  }
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
