import sinon from 'sinon';
import { TitlePage } from '..';

describe('TitlePage', () => {
  it('should call templateHandlebars function', () => {
    const props = {
      title: 'title',
    };

    const titlePage = new TitlePage(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    titlePage.render = () => templateHandlebarsMock({
      title: props.title,
    });

    // Вызываем render
    titlePage.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      title: props.title,
    });
  });
});
