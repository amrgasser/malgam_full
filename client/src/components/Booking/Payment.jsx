import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';


const Payment = () => {
    const { VITE_REACT_APP_NODE_SERVER } = import.meta.env
    console.log(VITE_REACT_APP_NODE_SERVER);
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${VITE_REACT_APP_NODE_SERVER}/config-payment`)
            const { publishableKey } = await response.json()
            setStripePromise(loadStripe(publishableKey))
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${VITE_REACT_APP_NODE_SERVER}/create-payment-intent`, {
                method: "POST",
                body: JSON.stringify({})
            })
            const { clientSecret } = await response.json()
            setClientSecret(clientSecret)
        }
        fetchData()
    }, [])
    return (
        <div className='flex flex-col'>
            <h1>Payment</h1>
            {

                stripePromise && clientSecret &&
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            }
        </div>
    )
}

export default Payment