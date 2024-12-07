// Define default values for input fields
const inputValues = {
  family_name: "Tanaka",
  family_name_kana: "タナカ",
  given_name: "Taro",
  given_name_kana: "タロウ",
  mail: "taro.tanaka@example.com",
  phone: "080-1234-5678",
  postcode: "123-4567",
  province: "Tokyo",
  city: "Shibuya",
  add_detailed: "1-2-3 Shibuya",
  username: "tanakataro"
};

// Fill all input fields with default values
function autoFillInputs() {
  for (const [name, value] of Object.entries(inputValues)) {
    const input = document.querySelector(`input[name="${name}"]`);
    if (input) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  
}

// Run the function on page load

// Run the function on page load
autoFillInputs();
