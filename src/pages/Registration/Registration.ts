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
import { InputFormType, LinkType, TitlePageType } from '../../types';

const title = new TitlePage<TitlePageType>({
  title: 'Регистрация',
});

const inputFirstName = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'first_name',
  placeholder: 'Имя',
  events: {
    blur: firstOrSecondNameValidation,
    submit: firstOrSecondNameValidation,
  },
  eventInterception: true,
});

const inputSecondName = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'second_name',
  placeholder: 'Фамилия',
  events: {
    blur: firstOrSecondNameValidation,
    submit: firstOrSecondNameValidation,
  },
  eventInterception: true,
});

const inputLogin = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'login',
  placeholder: 'Логин',
  events: {
    blur: loginValidation,
    submit: loginValidation,
  },
  eventInterception: true,
});

const inputEmail = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'email',
  placeholder: 'Почта',
  events: {
    blur: emailValidation,
    submit: emailValidation,
  },
  eventInterception: true,
});

const inputPhone = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'phone',
  placeholder: 'Телефон',
  events: {
    blur: phoneValidation,
    submit: phoneValidation,
  },
  eventInterception: true,
});

const inputPassword = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'password',
  placeholder: 'Пароль',
  events: {
    blur: passwordValidation,
    submit: passwordValidation,
  },
  eventInterception: true,
});

const linkRegistration = new Link<LinkType>({
  link: '../Profile/index.html',
  title: 'Регистрация',
  id: 'reg',
  events: {
    click: getFormData,
  },
});

render<TitlePageType>('.section_registration', title, true);
render<InputFormType>('.wrapper', inputFirstName);
render<InputFormType>('.wrapper', inputSecondName);
render<InputFormType>('.wrapper', inputLogin);
render<InputFormType>('.wrapper', inputEmail);
render<InputFormType>('.wrapper', inputPhone);
render<InputFormType>('.wrapper', inputPassword);
render<LinkType>('.wrapper', linkRegistration);
