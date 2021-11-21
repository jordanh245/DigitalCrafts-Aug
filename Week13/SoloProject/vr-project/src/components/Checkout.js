// import React, {useState} from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// // stripe
// import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// // Util imports
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import TextField from '@material-ui/core/TextField';
// // Custom Components
// import CardInput from './Cardinput';
// import {makeStyles} from '@material-ui/core/styles';



// const useStyles = makeStyles({
// 	root: {
// 	  maxWidth: 500,
// 	  margin: '35vh auto',
// 	},
// 	content: {
// 	  display: 'flex',
// 	  flexDirection: 'column',
// 	  alignContent: 'flex-start',
// 	},
// 	div: {
// 	  display: 'flex',
// 	  flexDirection: 'row',
// 	  alignContent: 'flex-start',
// 	  justifyContent: 'space-between',
// 	},
// 	button: {
// 	  margin: '2em auto 1em',
	  
// 	},
	
		
		
	
	
//   });

// export default function HomePage() {
// 	const classes = useStyles()
//   // State
//   const [email, setEmail] = useState('');

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
   
// 	if (!stripe || !elements) {
   
//       return;
//     }

//     const res = await axios.post('http://localhost:3000/pay', {email: email});

//     const clientSecret = res.data['client_secret'];

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//         billing_details: {
//           email: email,
//         },
        

//       },
//     });

  
//       // The payment has been processed!
//       if (result.paymentIntent.status === 'succeeded') {
// 		toast.success("PAID")
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//       }
    
  
  
//   return (
//    <div>
//    <ToastContainer /> 
//    <Card className={classes.root}>
//       <CardContent className={classes.content}>
//         <TextField
//           label='Email'
//           id='outlined-email-input'
//           helperText={`Email you'll recive updates and receipts on`}
//           margin='normal'
//           variant='outlined'
//           type='email'
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           fullWidth
//         />
//         <CardInput />
//         <div className={classes.div}>
//           <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
//             Pay
//           </Button>
		  
//         </div>
//       </CardContent>
//     </Card>
// </div>

//   );

//   }




import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { CheckoutButtonStyle} from "../styled-components/CheckStyle"

const ProductDisplay = () => (
  <section>

    <form action="http://localhost:3000/create-checkout-session" method="POST">
      <CheckoutButtonStyle type="submit">
        Checkout
      </CheckoutButtonStyle>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      history.push("/home");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}