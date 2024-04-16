import { getUserInfoThunk, logOutUserThunk } from '../../store/modules/user';
import { onGoRoute } from '../../helpers/router';
import {
  createChat,
  getAllChats,
  getChatTokenThunk,
} from '../../store/modules/chats';

import { callHandlersWS, createWSThunk } from '../../store/modules/websocket';
import { getFormData } from '../../helpers/getFormData';
import { ChatMessage } from '../../types/user';
import { renderChats } from './Chats';

export const useProfileData = () => {
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

  const onCreateChat = async () => {
    const input = document.querySelector('.input_chat_name');
    await createChat((input as HTMLInputElement).value);
  };

  const onSendMessage = (socket:WebSocket) => () => {
    const form = document.querySelector('.messages_wrapper');
    const data = getFormData<ChatMessage>(form as HTMLFormElement);
    socket.send(JSON.stringify({
      content: data.message,
      type: 'message',
    }));
  };

  const onClickChat = (id:number, title: string) => async () => {
    // await addUsersToChatThunk([userId], id);
    const user = await getUser();
    const token = await getChatTokenThunk(id);
    const socket = await createWSThunk(user.id, id, token);
    callHandlersWS(socket);
    renderChats(onSendMessage(socket), title);
  };

  return {
    getUser,
    onLogOut,
    getChatsList,
    onCreateChat,
    onClickChat,
  };
};
