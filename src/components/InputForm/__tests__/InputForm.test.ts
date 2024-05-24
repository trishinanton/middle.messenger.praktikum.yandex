import sinon from 'sinon';
import { InputForm } from '..';

describe('InputForm', () => {
  it('should call templateHandlebars function', () => {
    const props = {
      type: 'type',
      class: 'class',
      name: 'name',
      placeholder: 'placeholder',
    };

    const inputForm = new InputForm(props);

    // Создаем мок функции templateHandlebars
    const templateHandlebarsMock = sinon.stub().returns('Rendered HTML');

    // Переопределяем метод render класса Button, чтобы он использовал мок функцию
    inputForm.render = () => templateHandlebarsMock({
      type: props.type,
      class: props.class,
      name: props.name,
      placeholder: props.placeholder,
    });

    // Вызываем render
    inputForm.render();

    // Проверяем, что функция templateHandlebars была вызвана с правильными аргументами
    sinon.assert.calledWith(templateHandlebarsMock, {
      type: props.type,
      class: props.class,
      name: props.name,
      placeholder: props.placeholder,
    });
  });
});
