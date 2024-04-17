import { InputForm } from '../../components/InputForm';
import { ButtonType, DescriptionType, InputFormType } from '../../types';
import { Button } from '../../components/Button';
import { render } from '../../helpers/render';
import { Description } from '../../components/Description';

export const renderChats = (onSendMessage: ()=> void, title:string, onAddToChat:()=>void) => {
  const messagesWrapper = document.querySelector('.messages_wrapper');
  const list = document.querySelector('#list_messages');
  const titleChatEl = document.querySelector('.title_chat');

  const addUserToChat = document.querySelector('.add_user_to_shat');

  if (addUserToChat) {
    addUserToChat.textContent = '';
  }

  if (messagesWrapper) {
    messagesWrapper.textContent = '';
  }

  if (list) {
    list.textContent = '';
  }

  if (titleChatEl) {
    titleChatEl.textContent = '';
  }

  const inputMessage = new InputForm<InputFormType>({
    type: 'text',
    class: 'input',
    name: 'message',
    placeholder: 'Введите сообщение',
  });

  const buttonSendMessage = new Button<ButtonType>({
    type: 'button',
    title: 'Отправить сообщение',
    id: 'send_message',
    events: {
      click: onSendMessage,
    },
  });

  const titleChat = new Description<DescriptionType>({
    text: title,
  });

  const buttonAddToChat = new Button<ButtonType>({
    type: 'button',
    title: 'Добавить пользователя в чат',
    id: 'add_user_to_chat',
    events: {
      click: onAddToChat,
    },
  });

  const inputIdUser = new InputForm<InputFormType>({
    type: 'text',
    class: 'input input_id_user',
    name: 'inputIdUser',
    placeholder: 'Введите id юзера',
  });

  render<DescriptionType>('.title_chat', titleChat);
  render<InputFormType>('.messages_wrapper', inputMessage);
  render<ButtonType>('.messages_wrapper', buttonSendMessage);
  render<InputFormType>('.add_user_to_shat', inputIdUser);
  render<ButtonType>('.add_user_to_shat', buttonAddToChat);
};
