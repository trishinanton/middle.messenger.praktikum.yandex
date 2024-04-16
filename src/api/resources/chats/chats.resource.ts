import { resource } from '../../fetch';
import { YandexApi } from '../../config';
import {
  AddUsersToChat, CreateChat, DeleteChat, GetAllChats, GetChatToken,
} from '../../types/chats';
import { Chat } from './chats.source';
import { allChatsAdapter } from './chats.adapter';

export const fetchAllChats = () => {
  const response = resource.get<GetAllChats>(`${YandexApi}v2/chats`, {
    data: {},
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res:Array<Chat>) => allChatsAdapter(res));

  return response;
};

export const getChatToken = (id: number) => {
  const response = resource.post<GetChatToken>(`${YandexApi}v2/chats/token/${id}`, {
    data: {},
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res:{ token: string }) => res.token);

  return response;
};

export const postCreateChat = (title: string) => {
  const response = resource.post<CreateChat>(`${YandexApi}v2/chats`, {
    data: {
      title: `${title}Тестовый чат`,
    },
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res:{ id: number }) => res.id);

  return response;
};

export const deleteChat = (chatId:number) => {
  const response = resource.post<DeleteChat>(`${YandexApi}v2/chats`, {
    data: {
      chatId: chatId || 0,
    },
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res);

  return response;
};

export const addUsersToChat = (users: Array<number>, chatId:number) => {
  const response = resource.put<AddUsersToChat>(`${YandexApi}v2/chats/users`, {
    data: {
      users,
      chatId,
    },
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res);
  return response;
};

export const deleteUsersToChat = (users: Array<number>, chatId:number) => {
  const response = resource.delete<AddUsersToChat>(`${YandexApi}v2/chats/users`, {
    data: {
      users,
      chatId,
    },
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res);

  return response;
};
