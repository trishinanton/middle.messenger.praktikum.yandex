import Handlebars from 'handlebars';
import { Block } from '../../helpers/block.ts';
import { template } from './template.ts';
import { ChatType } from '../../types';

export class Chat<T extends ChatType> extends Block<T> {
  constructor(props:T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = Handlebars.compile(template);
    return templateHandlebars({
      title: this.props.title,
    });
  }
}
