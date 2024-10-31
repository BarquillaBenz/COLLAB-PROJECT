const mongoose = require('mongoose');

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('connected to database')).catch((err) => console.log('errr', err))