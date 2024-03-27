import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';
import { InputFormType } from '../../types';

export class InputForm<T extends InputFormType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      type: this.props.type,
      class: this.props.class,
      name: this.props.name,
      placeholder: this.props.placeholder,
    });
  }
}
