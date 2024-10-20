const express = require('express');
const app = express();
const port = 3000;

// Redis bağlantısı
const redis = require('redis');
const client = redis.createClient({
  host: 'redis', // Kubernetes'deki Redis servisi
  port: 6379
});

app.get('/', (req, res) => {
  client.get('data', (err, reply) => {
    if (err) throw err;
    res.send(reply ? reply : "Veri bulunamadı");
  });
});

app.post('/store', (req, res) => {
  const data = req.query.data;
  client.set('data', data, (err, reply) => {
    if (err) throw err;
    res.send(`Veri saklandı: ${data}`);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
