import sinon from 'sinon';
import { Chat } from '../index.ts';

describe('Chat', () => {
  it('should call templateHandlebars function', () => {
    const props = { title: 'Chat' };

    const chat = new Chat(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    chat.render = () => templateHandlebarsMock({
      title: props.title,
    });

    // Вызываем render
    chat.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      title: props.title,
    });
  });
});
