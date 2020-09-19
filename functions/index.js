const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HR9xPLtxlO2ByNNbAnrAPT1rD4YJ1AQIyecl6ZpTG1U0nc4lcrnmiAm7RiWCUWKeMUhuzo1msrORLvWHsJYlf5f00AypX18ZI')

//API


//API config
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))


app.post('/payments/create', async (response, request) => {
    const total = request.query.total;
    console.log('Payment Request Received for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total ,
        currency:usd,
    });
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
})


//Listen commands
exports.api = functions.https.onRequest(app)


//Example endpoint
// http://localhost:5001/clone-ca173/us-central1/api