const $ = document.querySelector.bind(document);

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const onSubmit = () => {
  const emailInput = $("input");
  const errorLabel = $(".sign-up-form__error");

  const inputValue = emailInput.value;
  const isEmail = EMAIL_REGEX.exec(inputValue) !== null;

  // Handle error
  if (!inputValue || !isEmail) {
    emailInput.classList.add("sign-up-form__input--js-error");
    errorLabel.textContent = "Valid email required";
  } else {
    emailInput.classList.remove("sign-up-form__input--js-error");
    errorLabel.textContent = "";
  }
};
