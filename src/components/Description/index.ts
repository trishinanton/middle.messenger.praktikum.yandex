import Handlebars from 'handlebars';
import { Block } from '../../helpers/block.ts';
import { template } from './template.ts';
import { DescriptionType } from '../../types';

export class Description<T extends DescriptionType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = Handlebars.compile(template);
    return templateHandlebars({
      text: this.props.text,
    });
  }
}
