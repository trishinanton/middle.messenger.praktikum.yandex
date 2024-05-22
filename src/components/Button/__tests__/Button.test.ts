import sinon from 'sinon';
import { Button } from '../index.ts';

describe('Button', () => {
  it('should call templateHandlebars function', () => {
    const props = { id: 1, title: 'Button', type: 'primary' };

    const button = new Button(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    button.render = () => templateHandlebarsMock({
      id: props.id,
      title: props.title,
      type: props.type,
    });

    // Вызываем render
    button.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      id: props.id,
      title: props.title,
      type: props.type,
    });
  });
});
