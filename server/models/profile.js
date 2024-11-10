const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Non-binary', 'Other'], required: true },
  contact: { type: String, required: true },
  location: { type: String },
  emergencyContact: { type: String },
  mentalHealthHistory: { type: String }, 
  preferences: {
    language: { type: String, default: 'English' },
    therapistGenderPreference: { type: String, enum: ['Male', 'Female', 'No Preference'], default: 'No Preference' },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
