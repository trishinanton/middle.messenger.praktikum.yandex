import { TitlePage } from '../../components/TitlePage';
import { render } from '../../helpers/render';
import { InputForm } from '../../components/InputForm';
import { Link } from '../../components/Link';
import { getFormData } from '../../helpers/getFormData';
import {
  emailValidation,
  firstOrSecondNameValidation,
  passwordValidation,
  phoneValidation,
} from '../../helpers/validations';
import { InputFormType, LinkType, TitlePageType } from '../../types';

const title = new TitlePage<TitlePageType>({
  title: 'Настройки',
});

const inputAvatar = new InputForm<InputFormType>({
  type: 'file',
  class: 'input',
  name: 'avatar',
  placeholder: 'Аватар',
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

const inputDisplayName = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'display_name',
  placeholder: 'Имя в чате',
});

const inputOldPassword = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'oldPassword',
  placeholder: 'Старый пароль',
  events: {
    blur: passwordValidation,
    submit: passwordValidation,
  },
  eventInterception: true,
});

const inputNewPassword = new InputForm<InputFormType>({
  type: 'text',
  class: 'input',
  name: 'newPassword',
  placeholder: 'Новый пароль',
  events: {
    blur: passwordValidation,
    submit: passwordValidation,
  },
  eventInterception: true,
});

const linkSave = new Link<LinkType>({
  link: '../Profile/index.html',
  title: 'Сохранить',
  id: 'save',
  events: {
    click: getFormData,
  },
});

render<TitlePageType>('.section_settings', title, true);
render<InputFormType>('.wrapper', inputAvatar);
render<InputFormType>('.wrapper', inputFirstName);
render<InputFormType>('.wrapper', inputSecondName);
render<InputFormType>('.wrapper', inputLogin);
render<InputFormType>('.wrapper', inputEmail);
render<InputFormType>('.wrapper', inputPhone);
render<InputFormType>('.wrapper', inputDisplayName);
render<InputFormType>('.wrapper', inputOldPassword);
render<InputFormType>('.wrapper', inputNewPassword);
render<LinkType>('.wrapper', linkSave);
