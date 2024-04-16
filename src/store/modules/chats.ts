import {
  addUsersToChat,
  deleteChat, deleteUsersToChat,
  fetchAllChats, getChatToken,
  postCreateChat,
} from '../../api/resources';

// eslint-disable-next-line import/no-mutable-exports
export const chatList = [
  {
    title: 'Первый чат',
    id: 1,
    // wrapperClassName: 'chat_wrapper',
  },
  {
    title: 'Второй чат',
    id: 2,
    // wrapperClassName: 'chat_wrapper',
  },
  {
    title: 'Третий чат',
    id: 3,
    // wrapperClassName: 'chat_wrapper',
  },
];

export const getAllChats = () => fetchAllChats().then((chats) => chats);

export const createChat = (title:string) => postCreateChat(title);

export const deleteChatThunk = (chatId:number) => deleteChat(chatId);

export const addUsersToChatThunk = (users: Array<number>, chatId:number) => addUsersToChat(users, chatId);

export const deleteUsersToChatThunk = (users: Array<number>, chatId:number) => deleteUsersToChat(users, chatId);

export const getChatTokenThunk = (id: number) => getChatToken(id);
