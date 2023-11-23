const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 2
    },
} , {
    timestamps : true, // tells when it was created and when it was modified
});

const User = mongoose.model("User",userSchema);

module.exports = User ; 