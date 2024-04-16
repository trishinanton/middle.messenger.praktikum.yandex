import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';
import { ChatType } from '../../types';

export class Chat<T extends ChatType> extends Block<T> {
  constructor(props:T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      title: this.props.title,
    });
  }
}
