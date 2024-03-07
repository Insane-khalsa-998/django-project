document.addEventListener('DOMContentLoaded', function() {
    const fnameInput = document.querySelector('.fname');
    const lnameInput = document.querySelector('.lname');
    const errorFnameMessage = document.querySelector('.fname-error');
    const errorLnameMessage = document.querySelector('.lname-error');

    // Function to validate the first name input
    function validateFnameInput() {
        const fnameValue = fnameInput.value.trim();
        const nameRegex = /^[a-zA-Z]+$/; // Allow only alphabetic characters

        if (!nameRegex.test(fnameValue)) {
            // If input is invalid, display error message and add a class to highlight the input field
            errorFnameMessage.style.display = 'block';
            fnameInput.classList.add('invalid-fname');
        } else {
            // If input is valid, hide error message and remove the highlighting class
            errorFnameMessage.style.display = 'none';
            fnameInput.classList.remove('invalid-fname');
        }
    }

    // Function to validate the last name input
    function validateLnameInput() {
        const lnameValue = lnameInput.value.trim();
        const nameRegex = /^[a-zA-Z]+$/; // Allow only alphabetic characters

        if (!nameRegex.test(lnameValue)) {
            // If input is invalid, display error message and add a class to highlight the input field
            errorLnameMessage.style.display = 'block';
            lnameInput.classList.add('invalid-lname');
        } else {
            // If input is valid, hide error message and remove the highlighting class
            errorLnameMessage.style.display = 'none';
            lnameInput.classList.remove('invalid-lname');
        }
    }

    // Add event listener to validate first name input on keyup event
    fnameInput.addEventListener('keyup', validateFnameInput);

    // Add event listener to validate last name input on keyup event
    lnameInput.addEventListener('keyup', validateLnameInput);
});

document.addEventListener('DOMContentLoaded', function() {
    const dayInput = document.querySelector('.dob-day');
    const monthInput = document.querySelector('.dob-month');
    const yearInput = document.querySelector('.dob-year');

    // Predefined error messages
    const dayErrorMessage = 'Please enter a valid day.';
    const monthErrorMessage = 'Please enter a valid month.';
    const yearErrorMessage = 'Please enter a valid year.';

    // Function to display error message based on input field
    function displayErrorMessage(input, message) {
        const errorContainer = input.parentElement.querySelector('.error-message');
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }

    // Event listeners for input fields
    dayInput.addEventListener('input', function() {
        if (!validateDay()) {
            displayErrorMessage(dayInput, dayErrorMessage);
        } else {
            hideErrorMessage(dayInput);
        }
    });

    monthInput.addEventListener('input', function() {
        if (!validateMonth()) {
            displayErrorMessage(monthInput, monthErrorMessage);
        } else {
            hideErrorMessage(monthInput);
        }
    });

    yearInput.addEventListener('input', function() {
        if (!validateYear()) {
            displayErrorMessage(yearInput, yearErrorMessage);
        } else {
            hideErrorMessage(yearInput);
        }
    });

    // Function to validate the day input
    function validateDay() {
        const day = dayInput.value.trim();
        const twoDigitRegex = /^\d{1,2}$/;
        return twoDigitRegex.test(day);
    }

    // Function to validate the month input
    function validateMonth() {
        const month = monthInput.value.trim();
        const twoDigitRegex = /^\d{1,2}$/;
        return twoDigitRegex.test(month);
    }

    // Function to validate the year input
    function validateYear() {
        const year = yearInput.value.trim();
        const fourDigitRegex = /^\d{4}$/;
        return fourDigitRegex.test(year);
    }

    // Function to hide error message
    function hideErrorMessage(input) {
        const errorContainer = input.parentElement.querySelector('.error-message');
        errorContainer.textContent = '';
        errorContainer.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const genderSelect = document.getElementById('gender');
    const genderError = document.querySelector('.gender-error');

    // Event listener for gender selection
    genderSelect.addEventListener('change', function() {
        if (!validateGender()) {
            displayErrorMessage(genderError, 'Please select a valid gender.');
        } else {
            hideErrorMessage(genderError);
        }
    });

    // Function to validate the gender selection
    function validateGender() {
        return genderSelect.value !== ''; // Gender is valid if it's not empty
    }

    // Function to display error message
    function displayErrorMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    // Function to hide error message
    function hideErrorMessage(element) {
        element.textContent = '';
        element.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const phoneNumberInput = document.querySelector('.phone-number');
    const phoneNumberError = document.querySelector('.phone-number-error');

    // Event listener for phone number input
    phoneNumberInput.addEventListener('input', function() {
        if (!validatePhoneNumber()) {
            displayErrorMessage(phoneNumberError, 'Please enter a valid phone number.');
        } else {
            hideErrorMessage(phoneNumberError);
        }
    });

    // Function to validate the phone number input
    function validatePhoneNumber() {
        // Regular expression for a valid phone number (only digits, optionally preceded by a country code)
        const phoneNumberRegex = /^\+?\d*$/;
        return phoneNumberRegex.test(phoneNumberInput.value.trim());
    }

    // Function to display error message
    function displayErrorMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    // Function to hide error message
    function hideErrorMessage(element) {
        element.textContent = '';
        element.style.display = 'none';
    }
});

 // Function to validate UK postcode
function validatePostcode(postcode) {
    // Regular expression for UK postcode pattern
    var postcodePattern = /^(GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) [0-9][ABD-HJLNP-UW-Z]{2})$/i;
    return postcodePattern.test(postcode);
}

// Function to validate UK address
function validateAddress(address) {
    // For simplicity, let's assume any non-empty string is valid
    return address.trim() !== '';
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    // Get input values
    var fname = document.querySelector('.fname').value.trim();
    var lname = document.querySelector('.lname').value.trim();
    var day = document.querySelector('.dob-day').value.trim();
    var month = document.querySelector('.dob-month').value.trim();
    var year = document.querySelector('.dob-year').value.trim();
    var gender = document.querySelector('.gender').value;
    var phoneNumber = document.querySelector('.phone-number').value.trim();
    var houseNo = document.querySelector('.hnumber').value.trim();
    var streetName = document.querySelector('.sname').value.trim();
    var city = document.querySelector('.city').value.trim();
    var postcode = document.querySelector('.postcode').value.trim();
    var country = document.querySelector('.country').value.trim();
    var nhsNumber = document.querySelector('.nhsnumber').value.trim();

    // Validate if any field is empty
    var isEmpty = fname === '' || lname === '' || day === '' || month === '' || year === '' || gender === '' || phoneNumber === '' || houseNo === '' || streetName === '' || city === '' || postcode === '' || country === '' || nhsNumber === '';

    if (isEmpty) {
        // Display error message for empty fields
        document.querySelector('.empty-error').style.display = 'block';
        return; // Stop form submission if any field is empty
    } else {
        // Hide empty fields error message
        document.querySelector('.empty-error').style.display = 'none';
    }

    // Validate first name
    var fnameValid = validateName(fname);
    // Validate last name
    var lnameValid = validateName(lname);
    // Validate date of birth
    var dobValid = validateDOB(day, month, year);
    // Validate gender
    var genderValid = validateGender(gender);
    // Validate phone number
    var phoneNumberValid = validatePhoneNumber(phoneNumber);
    // Validate address fields
    var addressValid = validateAddress(houseNo) && validateAddress(streetName);
    // Validate city and postcode fields
    var cityValid = validateAddress(city);
    var postcodeValid = validatePostcode(postcode);
    // Validate country field (any non-empty string is valid)
    var countryValid = validateAddress(country);
    // Validate NHS number field (any non-empty string is valid)
    var nhsNumberValid = validateAddress(nhsNumber);

    // Display or hide error messages based on validation results
    document.querySelector('.fname-error').style.display = fnameValid ? 'none' : 'block';
    document.querySelector('.lname-error').style.display = lnameValid ? 'none' : 'block';
    document.querySelector('.dob-error').style.display = dobValid ? 'none' : 'block';
    document.querySelector('.gender-error').style.display = genderValid ? 'none' : 'block';
    document.querySelector('.phone-number-error').style.display = phoneNumberValid ? 'none' : 'block';
    document.querySelector('.address-error').style.display = addressValid ? 'none' : 'block';
    document.querySelector('.city-error').style.display = cityValid ? 'none' : 'block';
    document.querySelector('.postcode-error').style.display = postcodeValid ? 'none' : 'block';
    document.querySelector('.country-error').style.display = countryValid ? 'none' : 'block';
    document.querySelector('.nhsnumber-error').style.display = nhsNumberValid ? 'none' : 'block';

    // If all fields are valid, submit the form (for demonstration)
    if (fnameValid && lnameValid && dobValid && genderValid && phoneNumberValid && addressValid && cityValid && postcodeValid && countryValid && nhsNumberValid) {
        // Your form submission code here
        console.log('Form submitted successfully!');
    } else {
        // If any field is invalid, prevent form submission (for demonstration)
        console.log('Form submission failed. Please correct errors.');
    }
}
