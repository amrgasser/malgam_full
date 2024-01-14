import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import Button from '../Button'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState()
    const [isProcessing, setIsProcessing] = useState()
    const handleSubmit = async (e) => {
        console.log('here');
        if (!stripe || !elements) return

        setIsProcessing(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/malgam/completion`
            }
        })
        if (error) {
            setMessage(error.message)
        }
        
        setIsProcessing(false)
    }
    return (
        <div>
            <PaymentElement />
            <div className='pt-5' onClick={handleSubmit}>
                <Button> Confirm Order</Button>
            </div>
        </div>
    )
}

export default CheckoutForm