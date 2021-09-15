const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")
const { Schema } = mongoose

const userSchema = new Schema({
    fullName : {
        type: String,
        require: true
    },
    email : {
    type: String,
    unique: true,
    require: [true, "Please enter your email"],
    validate : [validator.isEmail, "Please enter a valid email"]
    },
    password : {
        type : String,
        minLength : 8,
        require: [true, "Please enter your password"],
        select : false
    },
    photo : {
        type : String
    },
    passwordConfrim : {
        type : String,
        validate : {
            validator : function(el){
            el === this.password
        },
        message : "passwords don't match"
    }
    }
})

userSchema.pre("save", async function (next) {
    //Only run this function if password is modified
    if(!this.isModified("password")) return next()

    //pre salting be4 
    this.password = await bcrypt.hash(
        this.password, 12
    )

    //clearing the saved password
    this.passwordConfrim = undefined
    next()
})

//init(available on all user docs) fn to compare candidatePassword(cP) and userPassword(uP)
userSchema.methods.correctPassword = async function(cP, uP){
    //returns true or false
    return await bcrypt.compare(cP,uP)
}



module.exports = mongoose.model("User", userSchema)