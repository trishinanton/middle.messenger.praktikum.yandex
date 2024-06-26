import { render } from '../../helpers/render';
import { InputForm } from '../../components/InputForm';
import { TitlePage } from '../../components/TitlePage';
import { loginValidation, passwordValidation } from '../../helpers/validations';
import {
  ButtonType,
  InputFormType,
  TitlePageType,
} from '../../types';
import { template } from './template';
import { Button } from '../../components/Button';
import { onGoRoute } from '../../helpers/router';
import { hideContent } from '../../helpers/hideContent';
import { useAuthorizationData } from './useAuthorizationData';

export const Authorization = () => {
  const root = document.querySelector('#app');
  if (root) {
    root.insertAdjacentHTML('afterbegin', template);
  }

  const { onClick } = useAuthorizationData();

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

  const buttonLogin = new Button<ButtonType>({
    title: 'Вход',
    type: 'button',
    id: 'login',
    events: {
      click: onClick,
    },
  });

  const buttonRegistration = new Button<ButtonType>({
    type: 'button',
    title: 'Регистрация',
    id: 'registration',
    events: {
      click: () => {
        onGoRoute('/sign-up');
      },
    },
  });

  render<TitlePageType>('.wrapper', title);
  render<InputFormType>('.wrapper', inputLogin);
  render<InputFormType>('.wrapper', inputPassword);
  render<ButtonType>('.wrapper', buttonLogin);
  render<ButtonType>('.wrapper', buttonRegistration);

  return {
    hide: hideContent(root),
  };
};
