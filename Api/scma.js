let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let kavin = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('idm', kavin);
