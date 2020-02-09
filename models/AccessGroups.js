const mongoose = require('mongoose');
const { Schema } = mongoose;


const accessGroups = new Schema({
    name: String,
    description: String,
    members: Array,
    hasaccessto: Array, //columns, tables //dbsources
    overidingexistingcompliancepolicies: Array 
})

mongoose.model('accessGroups', accessGroups);