import { TitlePage } from '../../components/TitlePage';
import { render } from '../../helpers/render';
import { InputForm } from '../../components/InputForm';
import { Link } from '../../components/Link';
import { getFormData } from '../../helpers/getFormData';
import {
  emailValidation,
  firstOrSecondNameValidation,
  loginValidation,
  passwordValidation,
  phoneValidation,
} from '../../helpers/validations';

const title = new TitlePage({
  title: 'Регистрация',
});

const inputFirstName = new InputForm({
  type: 'text',
  class: 'input',
  name: 'first_name',
  placeholder: 'Имя',
  events: {
    blur: firstOrSecondNameValidation,
  },
  eventInterception: true,
});

const inputSecondName = new InputForm({
  type: 'text',
  class: 'input',
  name: 'second_name',
  placeholder: 'Фамилия',
  events: {
    blur: firstOrSecondNameValidation,
  },
  eventInterception: true,
});

const inputLogin = new InputForm({
  type: 'text',
  class: 'input',
  name: 'login',
  placeholder: 'Логин',
  events: {
    blur: loginValidation,
  },
  eventInterception: true,
});

const inputEmail = new InputForm({
  type: 'text',
  class: 'input',
  name: 'email',
  placeholder: 'Почта',
  events: {
    blur: emailValidation,
  },
  eventInterception: true,
});

const inputPhone = new InputForm({
  type: 'text',
  class: 'input',
  name: 'phone',
  placeholder: 'Телефон',
  events: {
    blur: phoneValidation,
  },
  eventInterception: true,
});

const inputPassword = new InputForm({
  type: 'text',
  class: 'input',
  name: 'password',
  placeholder: 'Пароль',
  events: {
    blur: passwordValidation,
  },
  eventInterception: true,
});

const linkRegistration = new Link({
  link: '../Profile/index.html',
  title: 'Регистрация',
  id: 'reg',
  events: {
    click: getFormData,
  },
});

render('.section_registration', title, true);
render('.wrapper', inputFirstName);
render('.wrapper', inputSecondName);
render('.wrapper', inputLogin);
render('.wrapper', inputEmail);
render('.wrapper', inputPhone);
render('.wrapper', inputPassword);
render('.wrapper', linkRegistration);
