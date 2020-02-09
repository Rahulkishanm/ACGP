const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientDBSourcesSchema = new Schema({
    dbdriver: String,
    ip: String,
    port: String,
    username: String,
    password: String,
    dataowner: String,
})

mongoose.model('clientDBSourcesSchema', clientDBSourcesSchema);