import { YandexWS } from '../../config';

export const createSocket = (userId:number, chatId:number, token:string) => new WebSocket(`${YandexWS}chats/${userId}/${chatId}/${token}`);
