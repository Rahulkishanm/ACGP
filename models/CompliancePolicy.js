const mongoose = require('mongoose');
const { Schema } = mongoose;


const compliancePolicy = new Schema({
    name: String,
    type: String,//'Exception',
    datasources: Array,
    datatable: Array,
    column: Array,
    tags: Array,
    groups: Array,
    expirydate: Date
})

mongoose.model('compliancePolicy', compliancePolicy);