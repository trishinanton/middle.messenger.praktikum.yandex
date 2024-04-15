import { getChats } from '../../store/selectors/chats.selector';
import { render } from '../../helpers/render';
import { Chat } from '../../components/Chat';
import { TitlePage } from '../../components/TitlePage';
import { InputForm } from '../../components/InputForm';
import { messageValidation } from '../../helpers/validations';
import {
  ButtonType,
  ChatType,
  InputFormType,
  TitlePageType,
} from '../../types';
import { template } from './template';
import { onGoRoute } from '../../helpers/router';
import { Button } from '../../components/Button';
import { hideContent } from '../../helpers/hideContent';

export const Profile = () => {
  const root = document.querySelector('#app');
  if (root) {
    root.insertAdjacentHTML('afterbegin', template);
  }

  const chatList = getChats();

  const title = new TitlePage<TitlePageType>({
    title: 'Профиль',
  });

  const button = new Button<ButtonType>({
    title: 'Настройки',
    id: 'Settings',
    events: {
      click: () => {
        onGoRoute('/settings');
      },
    },
  });

  const input = new InputForm<InputFormType>({
    type: 'text',
    class: 'input',
    name: 'message',
    placeholder: 'Поиск',
    events: {
      blur: messageValidation,
      submit: messageValidation,
    },
    eventInterception: true,
  });

  render<TitlePageType>('.wrapper', title);
  render<ButtonType>('.wrapper', button);
  render<InputFormType>('.wrapper', input);

  chatList.map((el) => {
    const chat = new Chat<ChatType>(el);
    render<ChatType>('#chats', chat);
  });

  return {
    hide: hideContent(root),
  };
};
