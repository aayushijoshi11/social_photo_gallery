const express = require('express');
const app = express();
 
const registerRoute = express.Router();
let register = require('../model/registation');
 
// Add register
registerRoute.route('/registation').post((req, res, next) => {
    register.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
//login
registerRoute.route('/login').post((req, res,next) => {
  console.log("1")
  register.authenticate(req.body)
  .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
  .catch(err => next(err));
})

const profilesController = require('../controllers/dashboard');

const storage = require('../helpers/storage');


registerRoute.route('/dashboard').post('/', function(req, res){
  storage, profilesController.postProfile});
module.exports = registerRoute;

