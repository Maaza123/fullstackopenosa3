const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

let numbers =[
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
]         


app
    .use(express.json())
    .use(morgan(function (tokens, req, res) {
        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'), '-',
          tokens['response-time'](req, res), 'ms',
          JSON.stringify(req.body)
        ].join(' ')
      }))
      .use(cors())

app
    .get(`/api/persons`, (request, response) => {
        return response.status(200).json(numbers);
    })
    .get('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id);
        const note = numbers.find(note => note.id === id);
        if(note){
            response.json(note);
        }else{
            console.log('not found');
            response.status(404).end();
        }
    })
    .get('/info', (request, response) => {
        const noteAmount = numbers.length;
        const date = new Date();
        return response.status(200).send(
            `<p>Phonebook has info for ${noteAmount} people</p>
             <p>${date}</p>`)
    })
    .delete('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        numbers = numbers.filter(number => number.id !== id)
      
        response.status(204).end()
      })
    .post('/api/persons', (req, res) => {
        const newId = Math.floor(Math.random() * 1000000000000);
        if(!req.body.name){
            return res.status(400).json(
                {error: 'parameter name is missing'}
            );
        }
        if(!req.body.number){
            return res.status(400).json(
                {error: 'paramater number is missing'}
            );
        }
        const found = numbers.find(number => number.name === req.body.name);
        if(found){
            return res.status(400).json(
                {error: 'Name already exists'}
            );
        }
        const newPerson = {
            name: req.body.name,
            number: req.body.number,
            id: newId
        }
        numbers = numbers.concat(newPerson);
        res.status(200).end();
    })
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})