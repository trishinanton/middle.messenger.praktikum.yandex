import sinon from 'sinon';
import { Link } from '..';

describe('Link', () => {
  it('should call templateHandlebars function', () => {
    const props = {
      id: '1',
      link: 'link',
      title: 'title',
    };

    const link = new Link(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    link.render = () => templateHandlebarsMock({
      id: props.id,
      link: props.link,
      title: props.title,
    });

    // Вызываем render
    link.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      id: props.id,
      link: props.link,
      title: props.title,
    });
  });
});
