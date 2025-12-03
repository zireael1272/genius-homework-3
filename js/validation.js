document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  const patterns = {
    name: /^\s*(\S+\s+\S+)\s*$/,
    phone: /^\+380\d{9}$/,
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  };

  function getOrCreateErrorSpan(input) {
    let errorSpan = input.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-message")) {
      errorSpan = document.createElement("span");
      errorSpan.classList.add("error-message");
      input.parentNode.insertBefore(errorSpan, input.nextSibling);
    }
    return errorSpan;
  }

  function showError(input, message) {
    const errorSpan = getOrCreateErrorSpan(input);
    input.classList.add("error");
    errorSpan.textContent = message;
  }

  function clearError(input) {
    const errorSpan = input.nextElementSibling;
    input.classList.remove("error");
    if (errorSpan && errorSpan.classList.contains("error-message")) {
      errorSpan.textContent = "";
    }
  }

  forms.forEach((form) => {
    const nameInput = form.querySelector('[name="full-name"]');
    const phoneInput = form.querySelector('[name="number-phone"]');
    const emailInput = form.querySelector('[name="email"]');

    const inputs = [nameInput, phoneInput, emailInput];

    inputs.forEach((input) => {
      if (input) {
        input.addEventListener("input", () => {
          if (input.value.trim() !== "") clearError(input);
        });
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      if (nameInput) {
        clearError(nameInput);
        if (nameInput.value.trim() === "") {
          showError(nameInput, "Введіть ім'я та прізвище");
          isValid = false;
        } else if (!patterns.name.test(nameInput.value)) {
          showError(nameInput, "Потрібно ім'я та прізвище");
          isValid = false;
        }
      }

      if (phoneInput) {
        clearError(phoneInput);
        if (phoneInput.value.trim() === "") {
          showError(phoneInput, "Введіть номер телефону");
          isValid = false;
        } else if (!patterns.phone.test(phoneInput.value)) {
          showError(phoneInput, "Формат: +380XXXXXXXXX");
          isValid = false;
        }
      }

      if (emailInput) {
        clearError(emailInput);
        if (emailInput.value.trim() === "") {
          showError(emailInput, "Введіть email");
          isValid = false;
        } else if (!patterns.email.test(emailInput.value)) {
          showError(emailInput, "Некоректний email");
          isValid = false;
        }
      }

      if (isValid) {
        console.log("Form is valid inside:", form);
        alert("Дякуємо! Ваша заявка прийнята.");
        form.reset();
      }
    });
  });
});
