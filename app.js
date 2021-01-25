const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Information = require('./models/information');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://PBBM:351426@cluster0.lxbk2.mongodb.net/DbTestAnecdotes?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


axios.get('http://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=e923c49f647e42e0a579bf43378eba0b').then(resp => {

    for (const x of resp.data.articles) {

        const information = new Information({
            title: x.title,
            description: x.description,
            url: x.url
        })
        // information.save();

    }

});

//=== TEST de requêtage sur le serveur de l'app ====================
app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});
//==================================================================

module.exports = app;






//   =========    AXIOS librarie tutorial    =========
//   |   http://zetcode.com/javascript/axios/        |
//   =================================================