const mongoose = require('mongoose');
const { Schema } = mongoose;
/*
dataRequestTransactionEmployee is a entity which tracks the progress of the request,

*/

const dataRequestTransactionByEmployee = new Schema({
    dataaccessrequestbyemployee: String,
    dataownercheck: {
        userid: String,
        username: String,
        addedtogroups: Array,
        approved: Boolean,
    },
    managercheck: {
        userid: String,
        username: String,
        approved: Boolean,
    },
    compliancemanagercheck: {
        userid: String,
        addedtogroups: Array,
        approved: Boolean,
        addedcompliancepolicy: Array
    }
})

mongoose.model('dataRequestTransactionByEmployee', dataRequestTransactionByEmployee);