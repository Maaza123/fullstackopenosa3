const mongoose = require('mongoose');

if (process.argv.length<1) {
    console.log('give password as argument')
    process.exit(1)
  }

const password = process.argv[2];
console.log(`Password: ${password}`);
const url = `mongodb+srv://fullstack:${password}@cluster0.4ynqw.mongodb.net/phoneNumbers?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true,  useUnifiedTopology:true})

const numberSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Number = mongoose.model('Number', numberSchema);

if(process.argv.length === 5){
    
    const number = new Number({
        name: String(process.argv[3]),
        number: String(process.argv[4])
    });
    console.log(`connecting:${number}`)
    number.save().then(response => {
        console.log(`Added ${response.name} number ${response.number} to phonebook.`)
        mongoose.connection.close();
    })
    .catch(error => console.log(error));
}else if(process.argv.length === 3){
    Number.find({})
    .then(response => {
        console.log(`Phonebook:`);
        response.forEach(number => {
            console.log(`${number.name} ${number.number}`)
        })
        mongoose.connection.close();
    })
}



