import { getUserInfoThunk, logOutUserThunk } from '../../store/modules/user';
import { onGoRoute } from '../../helpers/router';
import {
  addUsersToChatThunk,
  createChat,
  getAllChats,
  getChatTokenThunk,
} from '../../store/modules/chats';

import { callHandlersWS, createWSThunk } from '../../store/modules/websocket';
import { getFormData } from '../../helpers/getFormData';
import { ChatMessage } from '../../types/user';
import { renderChats } from './Chats';
import { Chat } from '../../components/Chat';
import { ChatType } from '../../types';
import { render } from '../../helpers/render';

export const useProfileData = () => {
  const form = document.querySelector('.messages_wrapper');
  const formAddToChat = document.querySelector('.add_user_to_shat');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Для отправки сообщения нажмите кнопку "Отправить Сообщение"');
    });
  }
  const getUser = async () => {
    const user = await getUserInfoThunk();
    return user;
  };
  const getChatsList = async () => {
    const chatList = await getAllChats();
    return chatList;
  };

  const onLogOut = async () => {
    try {
      await logOutUserThunk();
      onGoRoute('/');
    } catch (err) {
      alert(err);
    }
  };

  const onSendMessage = (socket:WebSocket) => () => {
    const data = getFormData<ChatMessage>(form as HTMLFormElement);
    socket.send(JSON.stringify({
      content: data.message,
      type: 'message',
    }));
  };

  const onAddToChat = (chatId:number) => async () => {
    if (formAddToChat) {
      const { inputIdUser } = getFormData<{ inputIdUser: string }>(formAddToChat as HTMLFormElement);
      try {
        await addUsersToChatThunk([Number(inputIdUser)], chatId);
        alert('Пользователь успешно добавлен в чат');
      } catch (err) {
        alert('Не удалось добавить пользователя в чат');
      }
    }
  };
  const onClickChat = (id:number, title: string) => async () => {
    const user = await getUser();
    const token = await getChatTokenThunk(id);
    const socket = await createWSThunk(user.id, id, token);
    callHandlersWS(socket);
    renderChats(onSendMessage(socket), title, onAddToChat(id));
  };

  const onCreateChat = async () => {
    const input = document.querySelector('.input_chat_name');
    const title = (input as HTMLInputElement).value;
    try {
      const id = await createChat(title);
      const chat = new Chat<ChatType>({
        title,
        wrapperClassName: 'chat_wrapper',
        events: {
          click: onClickChat(id, title),
        },
      });
      render<ChatType>('#chats', chat);
    } catch (err) {
      alert('Не удалось создать чат, попробуйте снова');
    }
  };

  return {
    getUser,
    onLogOut,
    getChatsList,
    onCreateChat,
    onClickChat,
  };
};
