const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    const email = document.getElementById('inputEmail4');
    const phone = document.getElementById('phone');

    const emailPattrn = /^\w+([\._]?\w+)+@\w+([\._]?\w{2,3})([\.]\w{2,3})$/;

    // Check if email is valid or not
    if (!emailPattrn.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return false;
    }
    // Check if the phone number field contains only numbers
    if (!/^[0-9]{10}$/.test(phone.value)) {
        alert('Please enter a valid phone number');
        phone.focus();
        return false;
    }

    // If all the form fields are valid, submit the form
    alert('Form submitted successfully');
    form.submit();
});
