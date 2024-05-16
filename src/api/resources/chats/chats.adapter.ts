import { Chat } from './chats.source';

// todo: доработать в след спринтах
export const allChatsAdapter = (data: Array<Chat>) => data.map((el) => el);
