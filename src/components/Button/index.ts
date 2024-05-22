import Handlebars from 'handlebars';
import { Block } from '../../helpers/block.ts';
import { template } from './template.ts';
import { ButtonType } from '../../types';

export class Button<T extends ButtonType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = Handlebars.compile(template);
    return templateHandlebars({
      id: this.props.id,
      title: this.props.title,
      type: this.props.type,
    });
  }
}
