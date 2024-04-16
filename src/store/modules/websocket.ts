import { createSocket } from '../../api/resources';
import { Description } from '../../components/Description';
import { DescriptionType } from '../../types';
import { render } from '../../helpers/render';

export const createWSThunk = (userId:number, chatId:number, token:string) => createSocket(userId, chatId, token);

export const callHandlersWS = (socket: WebSocket) => {
  socket.addEventListener('open', () => {
    console.log('Соединение установлено');
  });

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  socket.addEventListener('message', (event) => {
    const { content } = JSON.parse(event.data);
    console.log('Получены данные', content);
    // todo в след спринтах отрефактори, бизнес логику от ui отдели
    const description = new Description<DescriptionType>({
      text: content,
    });
    render<DescriptionType>('#list_messages', description);
  });

  socket.addEventListener('error', (event) => {
    console.log('Ошибка', event);
  });
};
