const mongoose  = require('mongoose');

const url = process.env.MONGO_DB_URI;

mongoose
    .set('useFindAndModify', false)
    .connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(result => {
        console.log(`connected to database`)
    })
    .catch((error) => {
        console.log('Error connecting to database', error.message);
    })

const numberSchema = new mongoose.Schema({
    name: String,
    number: String,
})

numberSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})


module.exports = mongoose.model('Number', numberSchema);

