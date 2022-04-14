const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.get('/', async (req,res) => {
    // res.json('done')
    res.json({MESSAGE: process.env.MESSAGE});
});

// server.get('/:number', (req, res) => {
//     try{
//         console.log('before throw')
//         let result = add_one_if_even(Number(req.params.number));
//         console.log('after throw', result);
//         res.json(result);
//     } catch(err){
//         res.status(500).json('odd number was sent');
//     } finally {
//         console.log('I always run');
//     }
// });

// function add_one_if_even(number){
//     throws_if_odd(number);
//     return number + 1;
// };

// function throws_if_odd(number) {
//     if(number % 2 === 1){
//         throw new Error('there is an error');
//     }
// };

module.exports = server;