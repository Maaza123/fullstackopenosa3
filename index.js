require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');

const Number = require('./models/numbers.js');
const cors = require('cors');

let numbers =[
	{
		'name': 'Arto Hellas',
		'number': '040-123456',
		'id': 1
	},
	{
		'name': 'Ada Lovelace',
		'number': '39-44-5323523',
		'id': 2
	},
	{
		'name': 'Dan Abramov',
		'number': '12-43-234345',
		'id': 3
	},
	{
		'name': 'Mary Poppendieck',
		'number': '39-23-6423122',
		'id': 4
	}
];

const errorHandler = (error, request, response, next) => {
	console.log(error.message);
	console.log(error.name);

	if(error.name === 'CastError'){
		return response.status(400).send({ error: 'malformedi id' });
	}else if(error.name ==='ValidationError'){
		return response.status(400).send({ error: error.message });
	}

	next(error);
};
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
		].join(' ');
	}))
	.use(cors());

app
	.get('/api/persons', (request, response, next) => {
		Number.find({})
			.then(result => {
				response.status(200).send(result);
			});
	})
	.get('/api/persons/:id', (request, response, next) => {
		Number.findById(request.params.id)
			.then(number => {
				if(number){
					response.status(200).json(number);
				}else{
					console.log('not found');
					response.status(404).end();
				}

			})
			.catch(error => {
				next(error);
			});
	})
	.get('/info', (request, response, next) => {
		Number
			.find({})
			.then(result => {
				console.log(result);
				const noteAmount = result.length;
				const date = new Date();
				return response.status(200).send(
					`<p>Phonebook has info for ${noteAmount} people</p>
                    <p>${date}</p>`);
			})
			.catch(error => {
				next(error);
			});

	})
	.delete('/api/persons/:id', (request, response, next) => {
		Number.findByIdAndDelete(request.params.id)
			.then(result => {
				response.status(204).end();
			})
			.catch(error => {
				next(error);
			});
	})

	.post('/api/persons', (req, res, next) => {
		if(!req.body.name){
			return res.status(400).json(
				{ error: 'parameter name is missing' }
			);
		}
		if(!req.body.number){
			return res.status(400).json(
				{ error: 'paramater number is missing' }
			);
		}
		const newNumber = new Number({
			name: req.body.name,
			number: req.body.number,
		});

		newNumber.save()
			.then(response => {
				console.log(response);
				res.status(200).json(response);
			})
			.catch(error => next(error));
	})
	.put('/api/persons/:id', (request, response, next) => {
		Number.findByIdAndUpdate(request.params.id, { number: request.body.number }, { new:true })
			.then(result => {
				response.status(201).json(result);
			})
			.catch(error => {
				next(error);
			});
	})

	.use(express.static('build'))
	.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});