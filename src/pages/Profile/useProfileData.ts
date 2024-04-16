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

export const useProfileData = () => {
  let socket:WebSocket;
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

  const onClickChat = (id:number) => async () => {
    // await addUsersToChatThunk([userId], id);
    const user = await getUser();
    const token = await getChatTokenThunk(id);
    socket = await createWSThunk(user.id, id, token);
    callHandlersWS(socket);
  };

  const onSendMessage = () => {
    const form = document.querySelector('.messages_wrapper');
    const data = getFormData<ChatMessage>(form as HTMLFormElement);
    socket.send(JSON.stringify({
      content: data.message,
      type: 'message',
    }));
  };

  return {
    getUser,
    onLogOut,
    getChatsList,
    onCreateChat,
    onClickChat,
    onSendMessage,
  };
};
