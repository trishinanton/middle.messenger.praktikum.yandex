import sinon from 'sinon';
import { Description } from '../index.ts';

describe('Description', () => {
  it('should call templateHandlebars function', () => {
    const props = { text: 'Chat' };

    const description = new Description(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    description.render = () => templateHandlebarsMock({
      text: props.text,
    });

    // Вызываем render
    description.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      text: props.text,
    });
  });
});
