const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let linkSchema = new Schema({
    link: {
        type: String
    },
    description: {
        type: String
    }
},
    {
        collection: 'links'
    })

    module.exports = mongoose.model('Link', linkschema)