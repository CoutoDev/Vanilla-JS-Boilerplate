import './scss/app.scss';
import App from './app'

const routes = require('./routes');
const express = require('express');
const app = express();

app.use(routes)

const app = async () => {
    document.getElementById('app').appendChild(await App())
}
// Load app
app()