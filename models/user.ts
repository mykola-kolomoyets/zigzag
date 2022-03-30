import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'required field'],
    minlength: 3,
    maxLength: 20,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'required field'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Invalid email'
    }
  },
  password: {
    type: String,
    required: [true, 'required field'],
    minLength: 6,
    select: false
  }
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id },
    '+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn',
    { expiresIn: '1d' }
  );
}

UserSchema.methods.comparePasswords = async function(password: string) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
}

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


export default mongoose.model('User', UserSchema);