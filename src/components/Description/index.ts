import { compile } from 'handlebars';
import { Block } from '../../helpers/block';
import { template } from './template';
import { DescriptionType } from '../../types';

export class Description<T extends DescriptionType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      text: this.props.text,
    });
  }
}
