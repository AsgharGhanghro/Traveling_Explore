const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
    
  firstName: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  adults: {
    type: Number,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("rooms", ContactSchema);
