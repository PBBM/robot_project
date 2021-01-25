const mongoose = require('mongoose');

const informationSchema = mongoose.Schema ({
    title: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: false}
});

module.exports = mongoose.model('Information', informationSchema);