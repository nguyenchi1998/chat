import mongoose from 'mongoose';
import Joi from 'joi';

const Schema = mongoose.Schema;

const role = Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Role = mongoose.model('Role', role, 'roles');

export default Role;
