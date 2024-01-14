import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import stripe from 'stripe'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const stripeClient = stripe(process.env.STRIPE_SECRET_KEY)

app.get("/config-payment", async (req, res, next) => {
    try {
        res.set({
            "Access-Control-Allow-Origin": "*",
        });

        res.status(200).json({
            publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/create-payment-intent", async (req, res, next) => {
    try {
        const { amountDue } = req.body
        res.set({
            "Access-Control-Allow-Origin": "*",
        });

        const paymentIntent = await stripeClient.paymentIntents.create({
            currency: 'gbp',
            amount: 100,
            automatic_payment_methods: {
                enabled: true
            }
        })

        res.status(200).json({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/booking", async (req, res, next) => {
    try {
        const { name, email } = req.body
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(3000, () => console.log("Listening"))