# EdTech Platform

This is Full Stack the EdTech Platform built in modern Technology (MERN Stack).

## Razorpay Integration in Backend 

### How Razorpay works in Node.Js?

- User Click on `Buy Now` button
- The `product id` is fetched and sent to the Server
- Product Price is fetched through this id from the database
- This price is sent to the RazorPay API along with additional details like `currency`, `receipt` etc
- An `order id` sent to the Response
- We are going to pass this `order id` to check out
- After succesfull payment, Razorpay send `razorpay_payment_id`, `razorpay_signature`, `razorpay_order_id` in response
- We send them in our server to verify payment
- After verifying payment, We perform post tasks which are needed to do (Like Give access of the Course to Student) 

### Build Integration

**Payment Status**: 

1. `Payment Stage 1`: Order State is created and payment state is also created. (Cutomer clicks on Buy Now button and submits the payment information which is sent to Razorpay But the payment isn't processed at this stage)

2. `Payment Stage 2`: Order State is attempted and Payment state is authorized/faild (An order movesfrom created to attempted state when payment is first attempted. It remains in this state until apayment associated with the order is captured.)
   
3. `Payment Stage 3`: Order State is paid and Payment state is captured (After the payment moves to the captured state, the order moves to the paid state. No more payment requests are allowed after an order moves to the paid state. The order continues to be in this state even if the payment for this order is refunded.)
>Order is an important step in the payment process.
> - An order should be created for every payment.
> - You can create an order using the Orders API. It is a server-side API call. Know how toauthenticate Orders API.
> - The `order_id` received in the response should be passed to the checkout. This ties the orderwith the payment and secures the request from being tampered. 
 
### Follow the below steps to integrate your Node.js-based website/app with Razorpay Payment Gateway.

1. Install Razorpay Node.js SDK.
1. Instantiate Razorpay.
1. Create an Order in Server.
1. Add Checkout Options.
1. Store Fields in Server.
1. Verify Payment Signature.
1. Verify Payment Status.
