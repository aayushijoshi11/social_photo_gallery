const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('dashboard', dashboardSchema);
