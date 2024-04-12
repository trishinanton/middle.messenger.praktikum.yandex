import { getChats } from '../../store/selectors/chats.selector';
import { render } from '../../helpers/render';
import { Chat } from '../../components/Chat';
import { TitlePage } from '../../components/TitlePage';
import { Link } from '../../components/Link';
import { InputForm } from '../../components/InputForm';
import { messageValidation } from '../../helpers/validations';
import {
  ChatType, InputFormType, LinkType, TitlePageType,
} from '../../types';

const chatList = getChats();

const title = new TitlePage<TitlePageType>({
  title: 'Профиль',
});

const link = new Link<LinkType>({
  link: '../Settings/index.html',
  title: 'Настройки',
  id: 'Settings',
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
render<LinkType>('.wrapper', link);
render<InputFormType>('.wrapper', input);

chatList.map((el) => {
  const chat = new Chat<ChatType>(el);
  render<ChatType>('#chats', chat);
});
