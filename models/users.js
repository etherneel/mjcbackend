const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 
const randomstring = require('randomstring');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    referedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    referral: {
        type: String,
        unique: true, 
    }
});

userSchema.pre('save', function (next) {
    if (!this.referral) {
        // Generate a new referral key with a fixed prefix 'E6' and 6 random alphanumeric characters
        const referralKey = `E6${randomstring.generate({
            length: 6,
            charset: 'numeric',
        })}`;

        this.referral = referralKey;
    }

    next();
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
