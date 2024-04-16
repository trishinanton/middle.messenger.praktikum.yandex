import { compile } from 'handlebars';
import { PictureType } from '../../types';
import { Block } from '../../helpers/block';
import { template } from './template';

export class Picture<T extends PictureType> extends Block<T> {
  constructor(props: T) {
    // Создаём враппер дом-элемент div
    super('div', props);
  }

  render() {
    const templateHandlebars = compile(template);
    return templateHandlebars({
      src: this.props.src,
      alt: this.props.alt,
      class: this.props.class,
    });
  }
}
