// script to initialize the checkout process
var stripe = Stripe("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");

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