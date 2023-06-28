const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },
        bloodGroup:{
            type : String,
            required : true
        },
        city:{
            type : String,
            required : true,
        },
        mobileNo:{
            type : String,
            required : true,
            unique : true
        }
    }
)

module.exports = mongoose.model('user',userSchema);