document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready!");

    const leftButton = document.querySelector('.leftLst');
    const rightButton = document.querySelector('.rightLst');
    const inner = document.querySelector('.MultiCarousel-inner');

    let scrollAmount = 0;

    if (leftButton && rightButton && inner) {
        leftButton.addEventListener('click', () => {
            scrollAmount -= 300;
            if (scrollAmount < 0) scrollAmount = 0;
            inner.style.transform = `translateX(-${scrollAmount}px)`;
        });

        rightButton.addEventListener('click', () => {
            scrollAmount += 300;
            if (scrollAmount > inner.scrollWidth - inner.clientWidth) {
                scrollAmount = inner.scrollWidth - inner.clientWidth;
            }
            inner.style.transform = `translateX(-${scrollAmount}px)`;
        });
    } else {
        console.error("One or more elements are missing.");
    }
});








   document.addEventListener('DOMContentLoaded', function () {
    let paymentMethod = document.getElementById('payment-method');
    let paymentForm = document.getElementById('paymentForm');
    let continueBtn = document.getElementById('continue-btn');
    let onlineRadio = document.getElementById('online');
    let cashRadio = document.getElementById('cash');
    let formInputs = paymentForm.querySelectorAll('input');

    // ❌ By default, Payment Method & Payment Form Disabled रहेगा
    paymentMethod.classList.add('disabled');
    disableForm();

    // ✅ "Continue" दबाने पर Payment Method Enable होगा
    continueBtn.addEventListener('click', function () {
        paymentMethod.classList.remove('disabled'); // Enable payment method
    });

    // ✅ Payment method select करने पर form enable/disable होगा
    onlineRadio.addEventListener('change', function () {
        enableForm(); // ✅ Enable form if online is selected
    });

    cashRadio.addEventListener('change', function () {
        disableForm(); // ❌ Disable form if cash is selected
        alert("आपने 'Cash On Bus' चुना है, इसलिए Payment Form Disable कर दिया गया है।");
    });

    // ✅ Function to enable form inputs
    function enableForm() {
        formInputs.forEach(input => {
            input.removeAttribute('disabled');
        });
    }

    // ❌ Function to disable form inputs
    function disableForm() {
        formInputs.forEach(input => {
            input.setAttribute('disabled', 'true');
        });
    }
});
