# EdTech Platform

This is Full Stack the EdTech Platform built in modern Technology (MERN Stack).

## Razorpay Integration in Backend (Build Integration)

1. **Create an Order in Server**: 
   1. `Payment Stage 1`: Order State is created and payment state is also created. (Cutomer clicks on Buy Now button and submits the payment information which is sent to Razorpay But the payment isn't processed at this stage)
   2. `Payment Stage 2`: Order State is attempted and Payment state is authorized/faild (An order moves from created to attempted state when payment is first attempted. It remains in this state until a payment associated with the order is captured.)
   3. `Payment Stage 3`: Order State is paid and Payment state is captured (After the payment moves to the captured state, the order moves to the paid state. No more payment requests are allowed after an order moves to the paid state. The order continues to be in this state even if the payment for this order is refunded.)
   >Order is an important step in the payment process.
    - An order should be created for every payment.
    - You can create an order using the Orders API. It is a server-side API call. Know how to authenticate Orders API.
    - The `order_id` received in the response should be passed to the checkout. This ties the order with the payment and secures the request from being tampered. >
