// script to initialize the checkout process
var stripe = Stripe("pk_test_51IgyKJDfhazcEVWksPo7FIqmPqm5OcYL8QDAS5x4PovKYMBRtr6vb5CST8q32AXPdZLcHqsrZL94tmNt69dx5S9E00uU8wcsxU");

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