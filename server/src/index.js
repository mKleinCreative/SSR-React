import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'

const app = express();
// https://react-ssr-api.herokuapp.com

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore();

  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
})

app.listen(3000, () => {
  console.log('listening on port 3000 (╯°□°)╯︵ ┻━┻ ')
})