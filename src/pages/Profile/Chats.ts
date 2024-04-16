import { InputForm } from '../../components/InputForm';
import { ButtonType, DescriptionType, InputFormType } from '../../types';
import { Button } from '../../components/Button';
import { render } from '../../helpers/render';
import { Description } from '../../components/Description';

export const renderChats = (onSendMessage: ()=> void, title:string) => {
  const messagesWrapper = document.querySelector('.messages_wrapper');
  const list = document.querySelector('#list_messages');
  const titleChatEl = document.querySelector('.title_chat');

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

  render<DescriptionType>('.title_chat', titleChat);
  render<InputFormType>('.messages_wrapper', inputMessage);
  render<ButtonType>('.messages_wrapper', buttonSendMessage);
};
