import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    {name: 'Diogo', age: 38},
    {name: 'Thiago', age: 32},
    {name: 'Victor', age: 27},
  ]
  return res.json(users);
});

app.listen(3333);