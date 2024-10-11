import mongoose from "mongoose";

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  memberNumber: {
    type: String,
    required: true,
    unique: true
  },
  interests: {
    type: [String], // Array of strings to store multiple interests
    required: false
  }
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
