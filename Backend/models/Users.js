const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, required: true},
    password:{type: String, required:true}
    
},
{timestams:true});

const User = mongoose.model("User", userSchema);

module.exports = User; 