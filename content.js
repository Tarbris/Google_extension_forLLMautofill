// Define default values for input fields
const inputValues = [
  "ABCD", 
  "111@tohoku.com",
  "Address Line 1",
  "City",
  "State",
];

// Fill all input fields with default values
function autoFillInputs() {
  const inputs = Array.from(document.querySelectorAll("input[type='text']"));
  if (inputs.length === 0) {
    console.warn("No input fields found on this page.");
    return;
  }

  inputs.forEach((input, index) => {
    if (index < inputValues.length) {
      // Handle disabled or readonly inputs
      input.removeAttribute('disabled');
      input.removeAttribute('readonly');

      // Fill input and trigger events
      input.value = inputValues[index];
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}

// Run the function on page load

// Run the function on page load
autoFillInputs();
