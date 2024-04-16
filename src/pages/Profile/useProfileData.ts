import { getUserInfoThunk, logOutUserThunk } from '../../store/modules/user';
import { onGoRoute } from '../../helpers/router';
import {
  createChat,
  getAllChats,
  getChatTokenThunk,
} from '../../store/modules/chats';

import { callHandlersWS, createWSThunk } from '../../store/modules/websocket';

const userId = 138;
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
    await createChat('');
  };

  const onClickChat = (id:number) => async () => {
    // await addUsersToChatThunk([userId], id);
    const token = await getChatTokenThunk(id);
    const socket = await createWSThunk(userId, id, token);
    callHandlersWS(socket);
  };

  return {
    getUser,
    onLogOut,
    getChatsList,
    onCreateChat,
    onClickChat,
  };
};
