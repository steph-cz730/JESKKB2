const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: String,
    subject: String,
    favoritePlanet: String,
    astronomyFan: Boolean,
    weeklyFacts: Boolean
}, {collection : "userData"})

const user = mongoose.model("user", userSchema)
module.exports = {
    user
}