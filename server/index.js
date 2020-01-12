const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose');

const Model = require('./models/cart-model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/feathers', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let d = new Model({items: ['yeet'], price: '25,66'})

d.save((err) => {
  console.log('saved!')
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

app.use('/cart', (req,res) => {
  Model.find((err, data) => {
    res.json(data)
  })
});

app.use('/test', (req, res) => {
  res.json({
    message: 'Hello world from Express middleware'
  });
});

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
