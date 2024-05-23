import sinon from 'sinon';
import { Picture } from '..';

describe('Picture', () => {
  it('should call templateHandlebars function', () => {
    const props = {
      src: 'src',
      alt: 'alt',
      class: 'class',
    };

    const picture = new Picture(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    picture.render = () => templateHandlebarsMock({
      src: props.src,
      alt: props.alt,
      class: props.class,
    });

    // Вызываем render
    picture.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      src: props.src,
      alt: props.alt,
      class: props.class,
    });
  });
});
