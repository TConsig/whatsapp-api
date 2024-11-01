const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota do Webhook
app.post('/webhook', (req, res) => {
    const data = req.body; // Captura os dados do webhook
    console.log('Webhook recebido:', data);
    res.sendStatus(200); // Responde com 200 OK
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
