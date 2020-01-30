import mongoose from 'mongoose';
import Joi from 'joi';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        length: 10,
    },
    avatar: {
        type: String,
        default: null,
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],
}, {
    timestamps: true,
});

user.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        const genSalt = await bcrypt.genSalt(Number(process.env.saltRounds));
        user.password = await bcrypt.hash(user.password, genSalt);
    }
    next();
});

user.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email }).select('-phone -updatedAt -createdAt -__v');
    if (!user) {
        return null;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return null;
    }
    return user;
};

const validateUser = (user) => {
    const schema = {
        email: Joi.string().email().required(),
        phone: Joi.string().required().regex(/09|01|06\d{8}/),
        password: Joi.string().required().min(6),
        avatar: Joi.string().default(''),
        roles: Joi.array(),
        username: Joi.string(),
    };

    return Joi.validate(user, schema);
};
const User = mongoose.model('User', user, 'users');

export { User, validateUser };
