import { render } from '../../helpers/render';
import { InputForm } from '../../components/InputForm';
import { TitlePage } from '../../components/TitlePage';
import { Link } from '../../components/Link';
import { getFormData } from '../../helpers/getFormData';
import { loginValidation, passwordValidation } from '../../helpers/validations';
import { InputFormType, LinkType, TitlePageType } from '../../types';

const title = new TitlePage<TitlePageType>({
  title: 'Вход',
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

const linkLogin = new Link<LinkType>({
  link: '../Profile/index.html',
  title: 'Вход',
  id: 'login',
  events: {
    click: getFormData,
  },
});

const linkRegistration = new Link<LinkType>({
  link: '../Registration/index.html',
  title: 'Регистрация',
  id: 'registration',
});

render<TitlePageType>('.wrapper', title);
render<InputFormType>('.wrapper', inputLogin);
render<InputFormType>('.wrapper', inputPassword);
render<LinkType>('.wrapper', linkLogin);
render<LinkType>('.wrapper', linkRegistration);
