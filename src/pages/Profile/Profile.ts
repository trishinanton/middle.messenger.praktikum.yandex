import { render } from '../../helpers/render';
import { Chat } from '../../components/Chat';
import { TitlePage } from '../../components/TitlePage';
import { InputForm } from '../../components/InputForm';
import { messageValidation } from '../../helpers/validations';
import {
  ButtonType,
  ChatType,
  InputFormType, PictureType,
  TitlePageType,
} from '../../types';
import { template } from './template';
import { onGoRoute } from '../../helpers/router';
import { Button } from '../../components/Button';
import { hideContent } from '../../helpers/hideContent';
import { useProfileData } from './useProfileData';
import { Picture } from '../../components/Picture';
import { YandexApi } from '../../api/config';

export const Profile = () => {
  const root = document.querySelector('#app');
  if (root) {
    root.insertAdjacentHTML('afterbegin', template);
  }

  const {
    getUser,
    onLogOut,
    getChatsList,
    onCreateChat,
    onClickChat,
  } = useProfileData();

  const title = new TitlePage<TitlePageType>({
    title: 'My Telegram',
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

  const inputChatName = new InputForm<InputFormType>({
    type: 'text',
    class: 'input input_chat_name',
    name: 'chat_name',
    placeholder: 'Введите название чата',
  });

  const buttonLogOut = new Button<ButtonType>({
    type: 'button',
    title: 'Разлогиниться',
    id: 'logout',
    events: {
      click: onLogOut,
    },
  });

  const buttonCreateChat = new Button<ButtonType>({
    type: 'button',
    title: 'Добавить чат',
    id: 'create_chat',
    events: {
      click: onCreateChat,
    },
  });

  render<TitlePageType>('.wrapper', title);
  getUser().then((user) => {
    const avatar = new Picture<PictureType>({
      src: `${YandexApi}v2/resources${user.avatar}`,
      alt: 'avatar',
      class: 'avatar',
    });
    render<PictureType>('.wrapper', avatar);
  });
  render<ButtonType>('.wrapper', buttonLogOut);
  render<ButtonType>('.wrapper', button);
  render<InputFormType>('.wrapper', input);
  render<InputFormType>('.add_chat', inputChatName);
  render<ButtonType>('.add_chat', buttonCreateChat);

  getChatsList().then((chatList) => chatList.map((el) => {
    const chat = new Chat<ChatType>({
      ...el,
      wrapperClassName: 'chat_wrapper',
      events: {
        click: onClickChat(el.id, el.title),
      },
    });
    render<ChatType>('#chats', chat);
  }));

  return {
    hide: hideContent(root),
  };
};
