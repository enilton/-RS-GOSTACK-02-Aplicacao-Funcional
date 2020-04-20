import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(3333, () => {
  console.log('started at port 3333');
});
