


//traigo stripe para backend y pasar el secret key

const Order = require('../models/Order');

const stripe = require("stripe")(process.env.PRIVATE_STRIPE);



//debo recibir los datos del pago al back y desde aqui mandar los datos para hacer el cargo 

const checkOut = async (req, res) => {

    const {token, totalPrice, userData, cartItems} = req.body
    try {
     
        console.log(JSON.stringify(token))
          console.log(userData);
          console.log("cartItems", cartItems)
       const customer = await stripe.customers.create({

            email : token.email,
            source: token.id
        })
        
     


        const payment = await stripe.charges.create({
            amount: totalPrice*100,
            currency: "EUR",
            customer: customer.id,
            receipt_email: token.email 
        })
        
        
        if(payment.status === "succeeded"){
            console.log(req.body)
            const order = new Order({
            OrderItems: cartItems ,
            userId:  userData._id, 
            name:  userData.name, 
            email: userData.email , 
            shippingAddress: {
                street: token.card.address_line1,
                city: token.card.address_city, 
                country: token.card.address_country,
                postcode:  token.card.address_zip, 
            } , 
            transactionId: token.card.id, 
            orderPrice: totalPrice
            })
    
             order.save();
           
            res.send('Payment done') 
        } else{
            res.send('payment failed')
        }
    } catch (error) {

        console.log(error);
        return res.json({
            ok: false,
            msg: "something went wrong"
        })
    }
}

module.exports = {checkOut} 