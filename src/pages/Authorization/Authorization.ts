import { render } from '../../helpers/render';
import { InputForm } from '../../components/InputForm';
import { TitlePage } from '../../components/TitlePage';
import { Link } from '../../components/Link';
import { getFormData } from '../../helpers/getFormData';
import { loginValidation, passwordValidation } from '../../helpers/validations';

const title = new TitlePage({
  title: 'Вход',
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

const linkLogin = new Link({
  link: '../Profile/index.html',
  title: 'Вход',
  id: 'login',
  events: {
    click: getFormData,
  },
});

const linkRegistration = new Link({
  link: '../Registration/index.html',
  title: 'Регистрация',
  id: 'registration',
});

render('.wrapper', title);
render('.wrapper', inputLogin);
render('.wrapper', inputPassword);
render('.wrapper', linkLogin);
render('.wrapper', linkRegistration);
