export function firstOrSecondNameValidation(event) {
  const firstNameValue = event.target.value.trim();
  const namePattern = /^[А-ЯЁA-Z][а-яёa-z\-]*$/;

  if (!namePattern.test(firstNameValue)) {
    alert('Пожалуйста, введите корректное имя. Имя должно начинаться с заглавной буквы, содержать только латинские или кириллические символы, дефис и не содержать цифры.');
  }
}

export function loginValidation(event) {
  const loginValue = event.target.value.trim();
  const loginPattern = /^[a-zA-Z0-9_-]{3,20}$/;

  if (!loginPattern.test(loginValue)) {
    alert('Пожалуйста, введите корректный логин. Логин должен содержать от 3 до 20 символов латиницы, цифры, дефис и/или нижнее подчёркивание.');
  }
}

export function emailValidation(event) {
  const emailValue = event.target.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailValue)) {
    alert('Пожалуйста, введите корректный email. Email должен содержать латинские буквы, цифры, дефис, подчёркивание, символ "@" и точку после неё, перед которой должны быть буквы.');
  }
}

export function passwordValidation(event) {
  const passwordValue = event.target.value.trim();
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;

  if (!passwordPattern.test(passwordValue)) {
    alert('Пожалуйста, введите пароль от 8 до 40 символов, содержащий хотя бы одну заглавную букву и цифру.');
  }
}

export function phoneValidation(event) {
  const phoneValue = event.target.value.trim();
  const phonePattern = /^\+?\d{10,15}$/;

  if (!phonePattern.test(phoneValue)) {
    alert('Пожалуйста, введите номер телефона от 10 до 15 цифр, возможно начиная с плюса.');
  }
}

export function messageValidation(event) {
  const messageValue = event.target.value.trim();

  if (messageValue === '') {
    alert('Пожалуйста, введите сообщение.');
  }
}
