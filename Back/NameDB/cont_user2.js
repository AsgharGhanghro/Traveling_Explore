const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({

    userName: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add an email'],
    maxlength: [20, ' Password cannot be longer than 20 characters'],
   
  },
  message:{
    type:String,
    required:false,
    maxlength:[300,'message can not be longer then 300 words']
  }
  
});

module.exports = mongoose.model('users', ContactSchema);