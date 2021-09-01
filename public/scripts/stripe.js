// script to initialize the checkout process
var stripe = Stripe("apikeygoeshere");

function checkout () {
    fetch("/create-checkout-session", {
            method: "POST",
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (session) {
            return stripe.redirectToCheckout({
                sessionId: session.id
            });
        })
        .then(function (result) {
            if (result.error) {
                // display the error
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
};
