const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataAccessRequestByEmployee = new Schema({
    username: String,
    userid: String,
    datasource: Array,
    database: Array,
    table: Array,
    column: Array,
    businessobjectives: String,
    detailedexplanation: String,
    compliancepolicyaffected: Array,
})

mongoose.model('dataAccessRequestByEmployee', dataAccessRequestByEmployee);