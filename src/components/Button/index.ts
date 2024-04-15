import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';
import { ButtonType } from '../../types';

export class Button<T extends ButtonType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      id: this.props.id,
      title: this.props.title,
    });
  }
}
