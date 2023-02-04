       const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let registation = new Schema({
  
  Fullname: {
    type: String
  },
  Mobilenumber: {
    type: String
  },
  Email: {
    type: String
    
  },
  Username:{
    type: String
  },
  password: {
    type: String
}
})

module.exports = mongoose.model('registation', registation)
module.exports = {
  authenticate
};
async function authenticate({ Email, password }) {
  const user = await registation.findOne({ Email });
  if (user && bcrypt.compareSync(password, registation.hash)) {
      const token = jwt.sign({ sub: registation.id }, config.secret, { expiresIn: '7d' });
      return {
          ...user.toJSON(),
          token
      };
  }
}



